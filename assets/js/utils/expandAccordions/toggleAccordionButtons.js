import getAccordionButtons from './getAccordionButtons';
import getDetails from './getDetails';
import { toggleButtonText } from './setToggleButtonState';

const toggleAccordionButtons = (openAccordionsButton) => {
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

export default toggleAccordionButtons;
