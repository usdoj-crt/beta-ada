export default function details(engine) {
    engine.registerTag('details', {
        parse(tagToken, remainTokens) {
          this.tpls = [];
          this.liquid.parser
            .parseStream(remainTokens)
            .on('template', (tpl) => this.tpls.push(tpl))
            // note that we cannot use arrow function because we need `this`
            .on('tag:enddetails', function () {
              this.stop();
            })
            .on('end', () => {
              throw new Error(`tag ${tagToken.getText()} not closed`);
            })
            .start();
        },
        * render(context, emitter) {
            emitter.write("<details data-detail-open='false'><summary><div><span class='pa11y-skip'>#{@title}</span></div></summary><div>")
            yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter)
            emitter.write("</div></details>")
        }
      });
}
