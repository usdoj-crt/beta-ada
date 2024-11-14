import getItemIds from './utils/expandAccordions/getItemIds';
import changeAccordionStateOnClick from './utils/expandAccordions/changeAccordionStateOnClick';
import checkIfAccordionOpenOrClosed from './utils/expandAccordions/checkIfAccordionOpenOrClosed';
import toggleAccordionButtons from './utils/expandAccordions/toggleAccordionButtons';

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Grab the button that will actually toggle things:
const openAccordionsButton = document.querySelector('#crt-page--expandaccordions');

// Select the node that will be observed for mutations
const contentNode = document.querySelector('#crt-page--content');

// On mutation, run check all buttons: when the state of a button changes, get the new array of button and detail states.
// Callback function to execute when mutations are observed
const checkIfMutationIsFromAccordion = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (
      // If the aria expanded attribute changes, but not on the main open all section button fire check our accordion state
      (mutation.attributeName === 'aria-expanded' &&
        mutation.target.id !== 'crt-page--expandaccordions') ||
      // Also check if the state of the details elements changes, if so re-run the check accordion buttons so we can update our main button
      mutation.attributeName === 'data-detail-open'
    ) {
      checkIfAccordionOpenOrClosed(openAccordionsButton);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(checkIfMutationIsFromAccordion);

// Only do anything if the toggle button is on the page:
if (openAccordionsButton) {
  // Start observing the target node for configured mutations:
  observer.observe(contentNode, config);
  //Get our list of item ids so we know what elements the button is controlling:
  getItemIds(openAccordionsButton);

  // Initialize the event handlers
  checkIfAccordionOpenOrClosed(openAccordionsButton);
  toggleAccordionButtons(openAccordionsButton);
  changeAccordionStateOnClick(openAccordionsButton);
}
