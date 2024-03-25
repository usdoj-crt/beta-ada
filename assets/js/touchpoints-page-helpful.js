export function tryToSetPageAnswer(formSelector, answerSelector) {
  if (!document.querySelector(formSelector)) return;

  const pageAnswer = document.querySelector(`${formSelector} ${answerSelector}`);
  if (!pageAnswer) {
    setTimeout(() => tryToSetPageAnswer(formSelector, answerSelector), 500);
    return;
  }

  pageAnswer.value = window.location.href;
}

export function submitFormOnAnswer(formSelector) {
  if (!document.querySelector(formSelector)) return;

  const yesNoButtons = document.querySelector(`${formSelector} .radios`);
  if (!yesNoButtons) {
    setTimeout(() => submitFormOnAnswer(formSelector), 500);
    return;
  }

  const submitButton = document.querySelector(`${formSelector} .submit_form_button`);

  Array.from(document.querySelector(`${formSelector} .radios input`)).forEach((input) => {
    input.addEventListener('change', () => {
      submitButton.click();
    });
  });
}
