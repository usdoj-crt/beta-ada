export default function list(engine) {
    engine.registerTag('asset', {
      parse(tagToken, remainTokens) {
        this.value = tagToken.args;
      },
      *render(context, emitter) {
        const args = this.value.split(' ');
        console.log(args);
        return `<img src="" alt="" class="" id="" />`
      },
    });
  }
