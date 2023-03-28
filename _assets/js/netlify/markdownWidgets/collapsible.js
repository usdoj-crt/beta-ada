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
      console.log(this.tpls);
      const accordionID = context._accordionID;
      let idx = context._collapsedIDX;
      const collapsedID = `${accordionID}-${idx}`;
      context._collapsedIDX += 1;
      const content = this.tpls[0].str.split('</h2>');
      const heading = content[0].split('<h2>')[1].replace('<h2>', '').replace('</h2>', '');
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
    },
  });
}
