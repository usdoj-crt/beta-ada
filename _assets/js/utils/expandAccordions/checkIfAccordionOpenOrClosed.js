import getAccordionButtons from './getAccordionButtons';
import getDetails from './getDetails';
import { toggleButtonText } from './setToggleButtonState';

// Consolidate accordion buttons and detail elements states into a single array and use to update the toggle button state.
const checkIfAccordionOpenOrClosed = (openAccordionsButton) => {
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

export default checkIfAccordionOpenOrClosed;
