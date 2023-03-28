export default function list(engine) {
    engine.registerTag('footnotes', {
      parse(tagToken, remainTokens) {
        this.value = tagToken.args;
        this.tpls = [];
        this.liquid.parser
          .parseStream(remainTokens)
          .on('template', (tpl) => this.tpls.push(tpl))
          // note that we cannot use arrow function because we need `this`
          .on('tag:endfootnotes', function () {
            this.stop();
          })
          .on('end', () => {
            throw new Error(`tag ${tagToken.getText()} not closed`);
          })
          .start();
      },
      *render(context, emitter) {
        emitter.write(`<div class='footnotes'><ol class='footnotelist'>`);
        yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
        emitter.write('</ol></div>');
      },
    });
  }