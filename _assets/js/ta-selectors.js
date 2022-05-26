import { replaceState } from './utils/replaceHistory';
import renderBadges from './templates/badges/renderBadges';
import toggleVisibility from './utils/toggleVisibility';
import checkURL from './utils/checkURLOnLoad';
import totalResults from './templates/search/totalResultsTemplate';
import { TAGS } from './utils/constants';
import expandTarget from './utils/expandTarget';
import moveFocus from './utils/moveFocus';
import findFocus from './utils/findFocus';

// Get our checkboxes:
const checkboxes = document.getElementsByClassName('usa-checkbox__input');
// Get our dropdown:
const dropdownContainer = document.getElementsByClassName('crt-dropdown')[0];
const dropdownButton = document.getElementById('category-expand');
const optionsArray = Array.from(document.querySelectorAll('.checkbox-option'));
const listContainer = document.getElementById('category-list-container');
// Get our tag node:
const tagNode = document.getElementById('selector-tags');
// Create a new unordered list to put our tags:
const list = document.createElement('ul');
list.setAttribute('aria-label', 'List of applied filters.');
list.classList.add('usa-button-group');
// Add the list to our container div:
tagNode.append(list);

// Initialize state:
let selectorState = [];

// Update badges and update the url:
const updateDOMandURL = () => {
  replaceState(selectorState, 'updatedState', `/resources/?filters=${selectorState.join(';')}`);
  renderBadges(list, selectorState);
  document.getElementById('resultsListTarget').innerHTML = totalResults(
    toggleVisibility(selectorState),
    'item'
  );
};

// Close the dropdown if user clicks outside of it:
document.addEventListener('click', (e) => {
  const didClickedOutside = !dropdownContainer.contains(e.target);
  if (didClickedOutside && !listContainer.hasAttribute('hidden')) {
    expandTarget('category-list-container');
  }
});

// Hide all options from the tab order:
optionsArray.forEach((option) => {
  option.setAttribute('tabindex', '-1');
});

dropdownContainer.addEventListener('keyup', (e) => {
  doKeyAction(e.key);
});

function doKeyAction(whichKey) {
  const currentFocus = findFocus();
  switch (whichKey) {
    case 'Enter':
      // If on li element, check box. If box checked, uncheck box
      if (!listContainer.hasAttribute('hidden') && currentFocus.tagName === 'INPUT') {
        if (currentFocus.dataset.checked === 'true') {
          currentFocus.dataset.checked = false;
          currentFocus.checked = false;
          let index = selectorState.indexOf(currentFocus.value);
          selectorState.splice(index, 1);
          // Find and remove badge:
          document.getElementById(`${currentFocus.value}-badge`).remove();
        } else if (currentFocus.dataset.checked === 'false') {
          currentFocus.dataset.checked = true;
          selectorState.push(currentFocus.value);
          currentFocus.checked = true;
        }
        updateDOMandURL();
      }
      break;

    case 'Escape':
      // If open and foucs on LI element, close, otherwise do nothing
      if (
        !listContainer.hasAttribute('hidden') &&
        (currentFocus.tagName === 'INPUT' || currentFocus.id === 'category-expand')
      ) {
        expandTarget('category-list-container');
      }
      break;

    case 'ArrowDown':
      // if dropdow is open, and focus is on li element, then move forward
      moveFocus(currentFocus, 'forward', optionsArray, dropdownButton);
      break;
    case 'ArrowUp':
      // If dropdow is open and focus is on li element then move back
      moveFocus(currentFocus, 'back', optionsArray, dropdownButton);
      break;
  }
}

// Update checkbox state:
Array.from(checkboxes).forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    // Update the check box state
    if (event.target.dataset.checked === 'true') {
      event.target.dataset.checked = false;
      let index = selectorState.indexOf(event.target.value);
      selectorState.splice(index, 1);
      // Find and remove badge:
      document.getElementById(`${event.target.value}-badge`).remove();
    } else if (event.target.dataset.checked === 'false') {
      event.target.dataset.checked = true;
      selectorState.push(event.target.value);
    }
    updateDOMandURL();
  });
});

dropdownButton.addEventListener('click', () => {
  expandTarget('category-list-container');
});

function setSelectedValue(state) {
  // Set checkboxes on load:
  for (let item in state) {
    if (TAGS.includes(state[item])) {
      document.getElementById(state[item]).checked = true;
      document.getElementById(state[item]).dataset.checked = true;
    }
  }
}

window.onload = function () {
  selectorState = checkURL('filters');
  if (selectorState[0] === '') {
    selectorState = [];
  }
  setSelectedValue(selectorState);
  updateDOMandURL();
};
