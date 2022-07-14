import { toggleButtonText } from './utils/expandAccordions/setToggleButtonState';

const preparePageForPrint = function () {
  // Grab the button that will toggle the accordion opening:
  const openAccordionsButton = document.querySelector('#crt-page--expandaccordions');

  const beforePrint = function () {
    document.querySelectorAll('details').forEach((detail) => {
      detail.setAttribute('open', true);
    });
  };
  const afterPrint = function () {
    if (openAccordionsButton) {
      toggleButtonText(openAccordionsButton);
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
