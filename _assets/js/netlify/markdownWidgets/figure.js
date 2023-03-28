export default function list(engine) {
    engine.registerTag('figure', {
      parse(tagToken, remainTokens) {
        this.value = tagToken.args;
        this.tpls = [];
        this.liquid.parser
          .parseStream(remainTokens)
          .on('template', (tpl) => this.tpls.push(tpl))
          // note that we cannot use arrow function because we need `this`
          .on('tag:endfigure', function () {
            this.stop();
          })
          .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
          })
          .start();
      },
      *render(context, emitter) {
        const title = this.value;
        const id = title.toLowerCase().trim().replaceAll(/\s/g, '');
        emitter.write(`<figure id=${id}>
          <strong>${title}</strong><br/>`);
        yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
        emitter.write('</figure>');
      },
    });
  }