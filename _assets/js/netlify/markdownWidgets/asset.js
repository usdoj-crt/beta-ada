export default function list(engine) {
    engine.registerTag('asset', {
      parse(tagToken, remainTokens) {
        this.value = tagToken.args;
      },
      *render(context, emitter) {
        const valArr = this.value.split(' ');
        const imagePathArr = valArr[0].split('/');
        const imageTitle = imagePathArr[imagePathArr.length - 1];
        return `<img src="${window.location.origin}/assets/images/${imageTitle}">`;
      },
    });
  }