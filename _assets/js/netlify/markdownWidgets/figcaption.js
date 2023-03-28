export default function list(engine) {
    engine.registerTag('figcaption', {
      parse(tagToken, remainTokens) {
        this.value = tagToken.args;
        this.tpls = [];
        this.liquid.parser
          .parseStream(remainTokens)
          .on('template', (tpl) => this.tpls.push(tpl))
          // note that we cannot use arrow function because we need `this`
          .on('tag:endfigcaption', function () {
            this.stop();
          })
          .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
          })
          .start();
      },
      *render(context, emitter) {
        emitter.write(`<figcaption>`);
        yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
        emitter.write('</figcaption>');
      },
    });
  }