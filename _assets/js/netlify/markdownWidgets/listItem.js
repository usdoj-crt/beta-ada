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
        `<li class='usa-icon-list__item'><div class='usa-icon-list__icon ${
          iconType === 'check_circle' ? 'text-green' : 'text-red'
        }'><svg class='usa-icon' aria-hidden='true' role='img'><use xlink:href='${window.location.origin}/assets/img/usa-icons/${iconType}.svg'></use></svg></div><div class='usa-icon-list__content'>`
      );
      yield this.liquid.renderer.renderTemplates(this.tpls, context, emitter);
      emitter.write('</div></li>');
    },
  });
}
