export default function listItem(engine) {
  engine.registerTag('list_item', {
    parse(tagToken, remainTokens) {
      this.tpls = [];
      this.liquid.parser
        .parseStream(remainTokens)
        .on('template', (tpl) => this.tpls.push(tpl))
        // note that we cannot use arrow function because we need `this`
        .on('tag:endlist_item', function () {
          this.stop();
        })
        .on('end', () => {
          throw new Error(`tag ${tagToken.getText()} not closed`);
        })
        .start();
    },
    *render(context, emitter) {
      const iconType = context._iconType;
      emitter.write(
        `<li class='usa-icon-list__item'><div class='usa-icon-list__icon'><div class='usa-icon' aria-hidden='true' style="background-image:url('${window.location.origin}/assets/img/usa-icons/${iconType}.svg')"></div></div><div class='usa-icon-list__content'>`
      );
      yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
      emitter.write('</div></li>');
    },
  });
}