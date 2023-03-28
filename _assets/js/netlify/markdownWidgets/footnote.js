export default function list(engine) {
    engine.registerTag('fn', {
      parse(tagToken, remainTokens) {
        this.value = tagToken.args;
      },
      *render(context, emitter) {
        const id = this.value;
        return `<sup><a href="#fn:${id}" class="footnote" id="fn-back:${id}">${id}</a></sup>`;
      },
    });
  }