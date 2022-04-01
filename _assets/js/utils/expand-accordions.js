// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Grab the button that will actually toggle things:
const openAccordionsButton = document.querySelector('#crt-page--expandaccordions');

// Select the node that will be observed for mutations
const accordionNode = document.querySelector('div.measure-6>div.usa-accordion');

// Grab all of the accordions and convert the Nodelist into an array:
const getAccordions = () => {
  let regexp = /accordion\-*/gm;
  let accordions = Array.from(document.querySelectorAll('div.usa-accordion__content')).filter(
    (accordion) => accordion.id.match(regexp)
  );
  return accordions;
};

// Grab all of the accordion buttons and convert the Nodelist into an array:
const getAccordionButtons = () => {
  let buttons = Array.from(document.querySelectorAll('button.usa-accordion__button.pa11y-skip'));
  return buttons;
};

// Grab all of the <details> elements and convert the Nodelist into an array:
const getDetails = () => {
  let details = Array.from(document.getElementsByTagName('details'));
  return details;
};

// Change the text within the open all button and swap the value of the data open attribute:
const toggleButtonText = (button) => {
  if (button.getAttribute('data-open') === 'true') {
    button.setAttribute('data-open', 'false');
    button.innerText = 'Expand all';
    return false;
  } else if (button.getAttribute('data-open') === 'false') {
    button.setAttribute('data-open', 'true');
    button.innerText = 'Close all';
    return true;
  }
};

// When we click the expand or close button, loop over the accordions and their buttons and either hide them or show them depending on the state of the button
const expandAccordions = () => {
  openAccordionsButton.addEventListener('click', function (e) {
    e.preventDefault();
    let expanded = toggleButtonText(openAccordionsButton);
    let accordions = getAccordions();
    let buttons = getAccordionButtons();
    let details = getDetails();
    accordions.forEach((accordion) => {
      if (expanded && accordion.getAttribute('hidden') !== null) {
        accordion.removeAttribute('hidden');
      }
      if (!expanded && accordion.getAttribute('hidden') === null) {
        accordion.setAttribute('hidden', 'hidden');
      }
    });
    buttons.forEach((button) => {
      if (expanded) {
        button.setAttribute('aria-expanded', 'true');
      }
      if (!expanded) {
        button.setAttribute('aria-expanded', 'false');
      }
    });
    details.forEach((detail) => {
      if (expanded && detail.getAttribute('open') === null) {
        detail.setAttribute('open', 'open');
      }
      if (!expanded && detail.getAttribute('open') !== null) {
        detail.removeAttribute('open');
      }
    });
  });
};

const toggleAccordionButtons = () => {
  let buttons = getAccordionButtons();
  let details = getDetails();
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.getAttribute('aria-expanded') === 'false') {
        openAccordionsButton.setAttribute('data-open', 'false');
        toggleButtonText(openAccordionsButton);
        return;
      }
    });
  });
  details.forEach((detail) => {
    detail.firstChild.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.parent.getAttribute('open') === null) {
        openAccordionsButton.setAttribute('data-open', 'false');
        toggleButtonText(openAccordionsButton);
        return;
      }
    });
  });
};

const checkAccordionButtons = () => {
  let buttons = getAccordionButtons();
  let details = getDetails();
  let btnArr = [];
  for (let button of buttons) {
    btnArr.push(button.getAttribute('aria-expanded'));
  }
  for (let detail of details) {
    btnArr.push(detail.getAttribute('open'));
  }
  if (!btnArr.includes('true') && !btnArr.includes('open')) {
    openAccordionsButton.setAttribute('data-open', 'true');
    toggleButtonText(openAccordionsButton);
  }
  return btnArr.includes('true');
};

// On mutation, run check all buttons:
// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.attributeName === 'aria-expanded') {
      checkAccordionButtons();
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(accordionNode, config);

toggleAccordionButtons();
expandAccordions();
