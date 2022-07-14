import { toggleButtonText } from './utils/expandAccordions/setToggleButtonState';
import expandButtonTextIsOpen from './utils/expandAccordions/expandButtonTextIsOpen';

const preparePageForPrint = function () {
  // Grab the button that will toggle the accordion opening:
  const openAccordionsButton = document.querySelector('#crt-page--expandaccordions');

  const beforePrint = function () {
    // If the button exists, and the accordions are closed then toggle the button state so it is open:
    if (openAccordionsButton) {
      expandButtonTextIsOpen(openAccordionsButton) ? toggleButtonText(openAccordionsButton) : null;
    }

    document.querySelectorAll('details').forEach((detail) => {
      detail.setAttribute('open', true);
    });
  };
  const afterPrint = function () {
    // If the button exists, and the accordions are open then toggle the button state so it is closed:
    if (openAccordionsButton) {
      expandButtonTextIsOpen(openAccordionsButton) === false ? toggleButtonText(openAccordionsButton) : null;
    }

    document.querySelectorAll('details').forEach((detail) => {
      detail.removeAttribute('open');
    });
  };

  if (window.matchMedia) {
    const mediaQueryList = window.matchMedia('print');
    if (mediaQueryList.matches) {
      beforePrint();
    } else {
      afterPrint();
    }
  }

  window.onbeforeprint = beforePrint;
  window.onafterprint = afterPrint;
};

preparePageForPrint();
