export default function list(engine) {
    engine.registerTag('asset', {
      parse(tagToken, remainTokens) {
        this.value = tagToken.args;
      },
      *render(context, emitter) {
        const options = this.value.split(' ');
        const imageTitle = options[0].split('/');
        return `<img src="${window.location.origin}/assets/images/${imageTitle[1]}">`;
      },
    });
  }