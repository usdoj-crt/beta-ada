export default function list(engine) {
    engine.registerTag('accordion', {
      parse(tagToken, remainTokens) {
        this.value = tagToken.args;
        this.tpls = [];
        this.liquid.parser
          .parseStream(remainTokens)
          .on('template', (tpl) => this.tpls.push(tpl))
          // note that we cannot use arrow function because we need `this`
          .on('tag:endaccordion', function () {
            this.stop();
          })
          .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
          })
          .start();
      },
      *render(context, emitter) {
        const options = this.value.split(' ');
        const id = `accordion-${options[0].trim()}`;
        const multiselect = options.includes('multiselect');
        const expandable = options.includes('expandable');
        context._accordionID = id;
        context._collapsedIDX = 1;
        emitter.write(`<div class="usa-accordion ${expandable ? 'expand' : null}" ${multiselect ? 'aria-multiselectable="true"': null}>`);
        yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
        emitter.write('</div>');
      },
    });
  }
