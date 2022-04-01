const openButton = document.querySelector('#crt-page--expandaccordions');

// Select the node that will be observed for mutations
const accordionNode = document.querySelector('div.measure-6>div.usa-accordion');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

function getAccordions() {
  let regexp = /accordion\-*/gm;
  let accordions = Array.from(document.querySelectorAll('div.usa-accordion__content')).filter(
    (accordion) => accordion.id.match(regexp)
  );
  return accordions;
}

function getButtons() {
  let buttons = Array.from(document.querySelectorAll('button.usa-accordion__button.pa11y-skip'));
  return buttons;
}

function toggleButtonText(button) {
  if (button.getAttribute('data-open') === 'true') {
    button.setAttribute('data-open', 'false');
    button.innerText = 'Open all';
    return 'closed';
  } else if (button.getAttribute('data-open') === 'false') {
    button.setAttribute('data-open', 'true');
    button.innerText = 'Close all';
    return 'open';
  }
}

function expandAccordions() {
  openButton.addEventListener('click', function (e) {
    e.preventDefault();
    let toggle = toggleButtonText(openButton);
    let accordions = getAccordions();
    let buttons = getButtons();
    accordions.forEach((accordion) => {
      if (toggle === 'open' && accordion.getAttribute('hidden') !== null) {
        accordion.removeAttribute('hidden');
      }
      if (toggle === 'closed' && accordion.getAttribute('hidden') === null) {
        accordion.setAttribute('hidden', 'hidden');
      }
    });
    buttons.forEach((button) => {
      if (toggle === 'open') {
        button.setAttribute('aria-expanded', 'true');
      }
      if (toggle === 'closed') {
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

function checkAllButtons() {
  let buttons = getButtons();
  let btnArr = [];
  for (let button of buttons) {
    btnArr.push(button.getAttribute('aria-expanded'));
  }
  if (!btnArr.includes('true')) {
    openButton.setAttribute('data-open', 'true');
    toggleButtonText(openButton);
  }
  return btnArr.includes('true');
}

function toggleButtons() {
  let buttons = getButtons();
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.getAttribute('aria-expanded') === 'false') {
        openButton.setAttribute('data-open', 'false');
        toggleButtonText(openButton);
        return;
      }
    });
  });
}

// On mutation, run check all buttons:
// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.attributeName  === 'aria-expanded' ) {
            checkAllButtons();
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(accordionNode, config);

toggleButtons();
expandAccordions();
