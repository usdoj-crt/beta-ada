import { Liquid } from 'liquidjs';

const tagNames = [
  'accordion',
  'asset',
  'collapsible',
  'details',
  'figcaption',
  'figure',
  'fn',
  'fnbody',
  'footnotes',
  'list',
  'list_item',
];

function getImagePath(imageTitle, imageData) {
  const imageListPaths = imageData['imageList']
    .filter(image => image['path'] != null && image['path'].includes(imageTitle))
    .map(image => "https://raw.githubusercontent.com/usdoj-crt/beta-ada/main/assets/images/" + image['path']);
  return imageListPaths.length > 0
    ? imageListPaths[0]
    : imageData['newImagePath'] + imageTitle;
}

function buildEngine(globals, imageData) {
  const engine = new Liquid({
    jekyllInclude: true,
    partials: '/_includes',
    ownPropertyOnly: false,
    globals,
  });

  tagNames.forEach((tagName) => {
    engine.registerTag(tagName, {
      parse(tagToken, remainTokens) {
        this.value = tagToken.args;
        if (tagName !== 'fn' && tagName !== 'asset') {
          this.tpls = [];
          this.liquid.parser
            .parseStream(remainTokens)
            .on('template', (tpl) => this.tpls.push(tpl))
            // note that we cannot use arrow function because we need `this`
            .on('tag:end'.concat(tagName), function () {
              this.stop();
            })
            .on('end', () => {
              throw new Error(`tag ${tagToken.getText()} not closed`);
            })
            .start();
        }
      },
      *render(context, emitter) {
        // It's possible to use templating inside of tags, so resolve that first:
        const renderedValue = this.liquid.parseAndRenderSync(this.value, context, emitter);
        switch (tagName) {
          case 'accordion':
            const options = renderedValue.split(' ');
            const accId = `accordion-${options[0].trim()}`;
            const multiselect = options.includes('multiselect');
            const expandable = options.includes('expandable');
            context._accordionID = accId;
            context._collapsedIDX = 1;
            emitter.write(
              `<div class="usa-accordion netlify-preview ${expandable ? 'expand' : null}" ${
                multiselect ? 'aria-multiselectable="true"' : null
              }>`
            );
            yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
            emitter.write('</div>');
            break;
          case 'asset':
            const valArr = renderedValue.split(' ');
            const imagePathRaw = valArr[0].replaceAll(/(^')|('$)/g, '');
            const imagePathArr = imagePathRaw.split('/');
            const imageTitle = imagePathArr[imagePathArr.length - 1];
            const imagePath = getImagePath(imageTitle, imageData);
            emitter.write(`<img src="${imagePath}">`);
            break;
          case 'collapsible':
            const accordionID = context._accordionID;
            let idx = context._collapsedIDX;
            const collapsedID = `${accordionID}-${idx}`;
            context._collapsedIDX += 1;
            const htag = this.tpls[0].str.includes('<h2>') ? 'h2' : 'h3';
            const content = this.tpls[0].str.split('</' + htag + '>');
            const heading = content[0].split('<' + htag + '>')[1]?.replace('<' + htag + '>', '')?.replace('</' + htag + '>', '');
            emitter.write(`<h2 class="usa-accordion__heading"">
                 <button class="usa-accordion__button pa11y-skip"
                   aria-expanded="true"
                   aria-controls="${collapsedID}">
                   ${heading}
                 </button>
               </h2>
               <div id="${collapsedID}" class="usa-accordion__content usa-prose">`);
            yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
            emitter.write('</div>');
            break;
          case 'details':
            const detailTitleArr = renderedValue.split('expandable');
            const detailTitle = yield detailTitleArr[0].replaceAll('$', "'");
            emitter.write(
              `<details data-detail-open='false'><summary><div><span class='pa11y-skip'>${detailTitle}</span></div></summary><div><p>`
            );
            yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
            emitter.write('</p></div></details>');
            break;
          case 'figcaption':
            emitter.write(`<figcaption>`);
            yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
            emitter.write('</figcaption>');
            break;
          case 'figure':
            const figTitle = renderedValue;
            const figId = figTitle.toLowerCase().trim().replaceAll(/\s/g, '');
            emitter.write(`<figure id=${figId}>
                 <strong>${figTitle}</strong><br/>`);
            yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
            emitter.write('</figure>');
            break;
          case 'fn':
            const fnId = renderedValue;
            return `<sup><a href="#fn:${fnId}" class="footnote" id="fn-back:${fnId}">${fnId}</a></sup>`;
          case 'fnbody':
            const fnBodyId = renderedValue.trim();
            emitter.write(`<li id='fn:${fnBodyId}' class='footnotebody' value='${fnBodyId}'>`);
            yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
            emitter.write(`<a href='#fn-back:${fnBodyId}' class='backlink'>Back to text</a>`);
            break;
          case 'footnotes':
            emitter.write(`<div class='footnotes'><ol class='footnotelist'>`);
            yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
            emitter.write('</ol></div>');
            break;
          case 'list':
            const listIconType = renderedValue;
            context._iconType = listIconType;
            emitter.write("<ul class='usa-icon-list margin-bottom-2'>");
            yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
            emitter.write('</ul>');
            break;
          case 'list_item':
            const listItemIconType = context._iconType;
            emitter.write(
              `<li class='usa-icon-list__item'>
                   <div class='usa-icon-list__icon'>
                     <div class='usa-icon' aria-hidden='true'
                         style="background-image:url('${window.location.origin}/assets/images/uswds/usa-icons/${listItemIconType}.svg')"
                         >
                     </div>
                   </div>
                   <div class='usa-icon-list__content'>
                 `
            );
            yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
            emitter.write('</div></li>');
            break;
          default:
            break;
        }
      },
    });
  });

  return engine;
}

function renderWidgets(interimHTML, variables, imageData) {
  const parser = new DOMParser();
  let newHTML = interimHTML;
  const htmlDoc = parser.parseFromString(interimHTML, 'text/html');
  const pTags = Array.from(htmlDoc.getElementsByTagName('p'));
  pTags.forEach(pTag => {
    if (pTag.innerText.includes('{% details')) {
      const newText = pTag.innerText.replaceAll("'", '');
      newHTML = newHTML.replaceAll(pTag.innerText, newText);
    }
  });
  const engine = buildEngine({
    'page': variables,
    'site': window.jekyllSite,  // This is defined globally via site_json.rb
    'lang': 'en',
  }, imageData);
  const renderedHTML = engine.parseAndRenderSync(newHTML);
  return renderedHTML;
}

export default renderWidgets;
