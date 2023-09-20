export default function tryToSetPageAnswer() {
    if (!document.querySelector('#touchpoints-yes-no-form')) return;

    const pageAnswer = document.querySelector('#touchpoints-yes-no-form #answer_02');
    if (!pageAnswer) {
      setTimeout(tryToSetPageAnswer, 500);
      return;
    }

    pageAnswer.value = window.location.href;
  }
