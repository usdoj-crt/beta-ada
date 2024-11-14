import Gumshoe from 'gumshoejs';
import AnchorJS from 'anchor-js';
import initGAEvents from './utils/gaUtil';
import parseLawsAndRegs from './laws-regs-parser';
import modal from './modal';
import redirectModal from './redirect-modal';
import printButton from './print-button';
import print from './print';
import search from './search';
import sidenav from './expand-sidenav';
import mobileCarousel from './carousel';
import setCookies from './feature-flag';
import communityOutreach from './outreach-campaign';
import { tryToSetPageAnswer, submitFormOnAnswer } from './touchpoints-page-helpful';

modal();
redirectModal();
print();
printButton();
search();
sidenav();
mobileCarousel();
setCookies();
tryToSetPageAnswer('#touchpoints-yes-no-form', '[name="answer_02"]');
tryToSetPageAnswer('#touchpoints-give-us-feedback-924', '[name="answer_05"]');
submitFormOnAnswer('#touchpoints-yes-no-form');

const mainEl = document.querySelector('.interactive-headers');
parseLawsAndRegs(mainEl);

communityOutreach();

initGAEvents();

const anchors = new AnchorJS();
anchors.add(".crt-page h2:not([class*='usa']) h2:not(.noAnchor)");

const toc = document.getElementById('toc');
if (toc) {
  let spy = new Gumshoe('#toc a', {
    nested: true,
    nestedClass: 'active-parent',
  });

  toc.addEventListener('click', function (event) {
    if (event.target.tagName !== 'A') return;
    expandPanel(event.target.hash);
  });
}

window.addEventListener('DOMContentLoaded', function () {
  if (location.hash) {
    expandPanel(location.hash);
  }
});

function expandPanel(hash) {
  let hashReplaced = hash.replace('#', '');

  const id = document.getElementById(hashReplaced);
  if (!id || !id.classList.contains('usa-accordion__heading')) return;

  const button = id.querySelector('button');
  if (button && button.getAttribute('aria-expanded') !== 'true') {
    button.click();
  }
}

// Hacky fix for https://github.com/uswds/uswds/issues/4338
// USWDS generates tooltips with duplicate ids. This finds and re-ids them.
window.addEventListener('DOMContentLoaded', function () {
  const ids = new Set();
  document.querySelectorAll('.usa-tooltip__body').forEach((tooltip) => {
    let conflicted = false;
    const describedby = `[aria-describedby="${tooltip.id}"]`;
    while (ids.has(tooltip.id)) {
      conflicted = true;
      tooltip.id += 'a';
    }
    ids.add(tooltip.id);

    if (!conflicted) return;

    document.querySelectorAll(describedby).forEach((el) => {
      el.setAttribute('aria-describedby', tooltip.id);
    });
  });
});
