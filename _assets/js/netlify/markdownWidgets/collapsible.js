export default function list(engine) {
  engine.registerTag('collapsible', {
    parse(tagToken, remainTokens) {
      this.value = tagToken.args;
      this.tpls = [];
      this.liquid.parser
        .parseStream(remainTokens)
        .on('template', (tpl) => this.tpls.push(tpl))
        // note that we cannot use arrow function because we need `this`
        .on('tag:endcollapsible', function () {
          this.stop();
        })
        .on('end', () => {
          throw new Error(`tag ${tagToken.getText()} not closed`);
        })
        .start();
    },
    *render(context, emitter) {
      const accordionID = context._accordionID;
      let idx = context._collapsedIDX;
      const collapsedID = `${accordionID}-${idx}`;
      context._collapsedIDX += 1;
      let heading = '';
      //this.tpls.forEach(token => token.str?.includes('<h2>') ? heading = token.str : heading = "");
      const contentWithoutHeadings = this.tpls.filter(token => !token.str?.includes('<h2>'));
      emitter.write(`<h2 class="usa-accordion__heading"">
        <button class="usa-accordion__button pa11y-skip"
          aria-expanded="true"
          aria-controls="${collapsedID}">
          ${heading ? heading : ''}
        </button>
      </h2>
      <div id="${collapsedID}" class="usa-accordion__content usa-prose">`);
      yield this.liquid.renderer.renderTemplates(contentWithoutHeadings, context, emitter);
      emitter.write('</div>');
    },
  });
}
