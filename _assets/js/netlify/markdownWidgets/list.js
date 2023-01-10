export default function list(engine) {
    engine.registerTag('list', {
        parse(tagToken, remainTokens) {
          this.tpls = [];
          this.liquid.parser
            .parseStream(remainTokens)
            .on('template', (tpl) => this.tpls.push(tpl))
            // note that we cannot use arrow function because we need `this`
            .on('tag:endlist', function () {
              this.stop();
            })
            .on('end', () => {
              throw new Error(`tag ${tagToken.getText()} not closed`);
            })
            .start();
        },
        * render(context, emitter) {
          emitter.write("<ul class='usa-icon-list margin-bottom-2'>")
          yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter)
          emitter.write("</ul>")
        }
      });
}
