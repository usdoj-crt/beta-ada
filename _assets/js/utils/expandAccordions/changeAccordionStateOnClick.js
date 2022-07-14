import getAccordions from './getAccordions';
import getAccordionButtons from './getAccoridionButtons';
import getDetails from './getDetails';
import { toggleButtonText } from './setToggleButtonState';
import { openDetails, closeDetails } from "./setDetailsElementState";

// When we click the expand or close button, loop over the accordions and their buttons and either hide them or show them depending on the state of the button
const changeAccordionStateOnClick = (openAccordionsButton) => {
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

  export default changeAccordionStateOnClick;