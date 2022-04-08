// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Grab the button that will actually toggle things:
const openAccordionsButton = document.querySelector('#crt-page--expandaccordions');

// Select the node that will be observed for mutations
const contentNode = document.querySelector('#crt-page--content');

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
  let details = Array.from(document.querySelectorAll('details'));
  return details;
};

// Change the text within the open all button and swap the value of the data open attribute:
const toggleButtonText = (button) => {
  if (button.getAttribute('data-open') === 'true') {
    button.setAttribute('data-open', 'false');
    button.innerText = 'Open all sections';
    return false;
  } else if (button.getAttribute('data-open') === 'false') {
    button.setAttribute('data-open', 'true');
    button.innerText = 'Close all sections';
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
    // Manage accordion state:
    accordions.forEach((accordion) => {
      if (expanded && accordion.getAttribute('hidden') !== null) {
        accordion.removeAttribute('hidden');
      }
      if (!expanded && accordion.getAttribute('hidden') === null) {
        accordion.setAttribute('hidden', 'hidden');
      }
    });
    // Manage accordion buttons state:
    buttons.forEach((button) => {
      if (expanded) {
        button.setAttribute('aria-expanded', 'true');
      }
      if (!expanded) {
        button.setAttribute('aria-expanded', 'false');
      }
    });
    // Manage details state:
    details.forEach((detail) => {
      if (expanded && detail.getAttribute('open') === null) {
        detail.setAttribute('open', 'open');
        detail.setAttribute('data-detail-open', 'true');
      }
      if (!expanded && detail.getAttribute('open') !== null) {
        detail.removeAttribute('open');
        detail.setAttribute('data-detail-open', 'false');
      }
    });
  });
};

const toggleAccordionButtons = () => {
  let buttons = getAccordionButtons();
  let details = getDetails();
  // Listen for events on the accordion buttons and trigger toggle button side effect
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
  // Listen for events on the details element, manage details state and trigger toggle button side effect
  details.forEach((detail) => {
    detail.addEventListener('click', () => {
      if (detail.getAttribute('open') === null) {
        detail.setAttribute('data-detail-open', 'true');
        openAccordionsButton.setAttribute('data-open', 'false');
        toggleButtonText(openAccordionsButton);
        return;
      } else {
        detail.setAttribute('data-detail-open', 'false');
      }
    });
  });
};

// Consolidate accordion buttons and detail elements states into a single array and use to update the toggle button state.
const checkAccordionButtons = () => {
  let buttons = getAccordionButtons();
  let details = getDetails();
  let btnArr = [];
  for (let button of buttons) {
    btnArr.push(button.getAttribute('aria-expanded'));
  }
  for (let detail of details) {
    btnArr.push(detail.getAttribute('data-detail-open'));
  }
  if (!btnArr.includes('true') && !btnArr.includes('data-detail-open')) {
    openAccordionsButton.setAttribute('data-open', 'true');
    toggleButtonText(openAccordionsButton);
  }
  return btnArr.includes('true') && btnArr.includes('data-detail-open');
};

// On mutation, run check all buttons: when the state of a button changes, get the new array of button and detail states.
// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (
      mutation.attributeName === 'aria-expanded' ||
      mutation.attributeName === 'data-detail-open'
    ) {
      checkAccordionButtons();
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(contentNode, config);

// Initialize the event handlers
checkAccordionButtons();
toggleAccordionButtons();
expandAccordions();
