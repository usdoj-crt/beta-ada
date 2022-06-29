// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Grab the button that will actually toggle things:
const openAccordionsButton = document.querySelector('#crt-page--expandaccordions');

// Select the node that will be observed for mutations
const contentNode = document.querySelector('#crt-page--content');

// Grab all of the accordions and convert the Nodelist into an array:
const getAccordions = () => {
  const regexp = /accordion-expandable\-*/gm;
  const accordions = Array.from(
    document.querySelectorAll('.expand div.usa-accordion__content')
  ).filter((accordion) => accordion.id.match(regexp));
  return accordions;
};

// Grab all of the accordion buttons except for the table of contents button and convert the Nodelist into an array:
const getAccordionButtons = () =>
  Array.from(document.querySelectorAll('.expand button.usa-accordion__button.pa11y-skip'));

// Grab all of the <details> elements and convert the Nodelist into an array:
const getDetails = () => Array.from(document.querySelectorAll('details.expand'));

// Generate a list of all the controllable element ids so we can reference them using aria-controls in our button.
const getItemIds = () => {
  let ids = [];
  getAccordions().forEach((acc) => ids.push(acc.id));
  getDetails().forEach((det) => ids.push(det.id));
  ids = ids.join(' ');
  openAccordionsButton.setAttribute('aria-controls', ids);
};

// Toggle the state of the main toggle button:
// If the toggle button is open and clicked, change it's state to the opposite:
const isOpen = (button) => {
  button.setAttribute('data-open', 'false');
  button.setAttribute('aria-expanded', 'false');
  button.innerText = 'Open all sections';
  return false;
};

// If the toggle button is closed and clicked, change it's state to the opposite:
const isClosed = (button) => {
  button.setAttribute('data-open', 'true');
  button.setAttribute('aria-expanded', 'true');
  button.innerText = 'Close all sections';
  return true;
};

// Change the text within the open all button and swap the value of the data open attribute:
const toggleButtonText = (button) => {
  if (button.getAttribute('data-open') === 'true') {
    return isOpen(button);
  } else if (button.getAttribute('data-open') === 'false') {
    return isClosed(button);
  }
};

// Change the state of the details elements:
const openDetails = (detail) => {
  detail.setAttribute('open', 'open');
  detail.setAttribute('data-detail-open', 'true');
}

const closeDetails = (detail) => {
  detail.removeAttribute('open');
  detail.setAttribute('data-detail-open', 'false');
}


// When we click the expand or close button, loop over the accordions and their buttons and either hide them or show them depending on the state of the button
const expandAccordions = () => {
  openAccordionsButton.addEventListener('click', function (e) {
    const expanded = toggleButtonText(openAccordionsButton);
    let accordions = getAccordions();
    let buttons = getAccordionButtons();
    let details = getDetails();
    // Manage accordion state:
    accordions.forEach((accordion) => {
      if (expanded && accordion.getAttribute('hidden') !== null) {
        // Make accordion content visible:
        accordion.removeAttribute('hidden');
      }
      if (!expanded && accordion.getAttribute('hidden') === null) {
        // Hide that accordion content:
        accordion.setAttribute('hidden', 'hidden');
      }
    });
    // Manage accordion buttons state:
    buttons.forEach((button) => {
      if (expanded) {
        // Let screen readers know that the accordion is expanded:
        button.setAttribute('aria-expanded', 'true');
      }
      if (!expanded) {
        // Let screen readers know that the accordion is collapsed:
        button.setAttribute('aria-expanded', 'false');
      }
    });
    // Manage details state:
    details.forEach((detail) => {
      if (expanded && detail.getAttribute('open') === null) {
        openDetails(detail);
      }
      if (!expanded && detail.getAttribute('open') !== null) {
        closeDetails(detail);
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
      // If the aria expanded attribute changes, but not on the main open all section button fire check our accordion state
      (mutation.attributeName === 'aria-expanded' &&
        mutation.target.id !== 'crt-page--expandaccordions') ||
      // Also check if the state of the details elements changes, if so re-run the check accordion buttons so we can update our main button
      mutation.attributeName === 'data-detail-open'
    ) {
      checkAccordionButtons();
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Only do anything if the toggle button is on the page:
if (openAccordionsButton) {
  // Start observing the target node for configured mutations:
  observer.observe(contentNode, config)
  //Get our list of item ids so we know what elements the button is controlling:
  getItemIds();
  
  // Initialize the event handlers
  checkAccordionButtons();
  toggleAccordionButtons();
  expandAccordions();
};
