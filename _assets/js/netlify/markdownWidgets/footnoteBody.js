export default function list(engine) {
    engine.registerTag('fnbody', {
      parse(tagToken, remainTokens) {
        this.value = tagToken.args;
        this.tpls = [];
        this.liquid.parser
          .parseStream(remainTokens)
          .on('template', (tpl) => this.tpls.push(tpl))
          // note that we cannot use arrow function because we need `this`
          .on('tag:endfnbody', function () {
            this.stop();
          })
          .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
          })
          .start();
      },
      *render(context, emitter) {
        const id = this.value.trim();
        emitter.write(`<li id='fn:${id}' class='footnotebody' value='${id}'>`);
        yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
        emitter.write(`<a href='#fn-back:${id}' class='backlink'>Back to text</a>`);
      },
    });
  }
