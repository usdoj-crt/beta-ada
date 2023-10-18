export default function tryToSetPageAnswer() {
    if (!document.querySelector('#touchpoints-yes-no-form')) return;

    const pageAnswer = document.querySelector('#touchpoints-yes-no-form #answer_02');
    if (!pageAnswer) {
      setTimeout(tryToSetPageAnswer, 500);
      return;
    }

    const yesNoButtons = document.querySelector('#touchpoints-yes-no-form #answer_01');
    const submitButton = document.querySelector('#touchpoints-yes-no-form .submit_form_button');

    Array.from(yesNoButtons.getElementsByTagName('input')).forEach(input => {
      input.addEventListener('change', () => {
        submitButton.click();
      })
    });

    pageAnswer.value = window.location.href;
  }
