function tryToSetPageAnswer() {
  if (!document.querySelector('#touchpoints-yes-no-form')) return;

  const pageAnswer = document.querySelector('#touchpoints-yes-no-form #answer_02');
  if (!pageAnswer) {
    setTimeout(tryToSetPageAnswer, 500);
    return;
  }

  pageAnswer.value = window.location.href;
}

function tryToSetLongFormAnswers(submitButton) {
  if (!document.querySelector('#touchpoints-yes-no-form')) return;

  const yesno = document.querySelector('#touchpoints-longer-feedback-form #answer_10');
  const page = document.querySelector('#touchpoints-longer-feedback-form #answer_11');
  if (!yesno || !page) {
    setTimeout(tryToSetLongFormAnswers, 500);
    return;
  }

  page.value = window.location.href;
  yesno.value = submitButton.value;
}


function tryToAddResponseListeners() {
  if (!document.querySelector('#touchpoints-yes-no-form')) return;

  const buttons = document.querySelectorAll(
    '#touchpoints-yes-no-form #answer_01 input[type="submit"]'
  );
  if (buttons.length < 2) {
    setTimeout(tryToAddResponseListeners, 500);
    return;
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      tryToShowLongForm();
      tryToSetLongFormAnswers(button);
    });
  });
}

function tryToShowLongForm() {
  const wrapper = document.querySelector('#touchpoints-longer-feedback-form-wrapper');
  if (!wrapper) return;

  wrapper.hidden = false;
}

tryToSetPageAnswer();
tryToAddResponseListeners();
