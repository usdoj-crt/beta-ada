import { TAGS } from './utils/constants';
import expandTarget from './utils/taSelectors/expandTarget';
import updateDOMandURL from './utils/taSelectors/updateDomAndURL';
import dropDownKeyListener from './utils/taSelectors/dropDownKeyListener';
import { getSearchParam } from './utils/searchParamUtils';

// Get our checkboxes:
const checkboxes = document.getElementsByClassName('usa-checkbox__input');
// Get our dropdown:
const dropdownContainer = document.getElementsByClassName('crt-dropdown')[0];
// Get our dropdown button:
const dropdownButton = document.getElementById('category-expand');
// Get our dropdown options:
const optionsArray = Array.from(document.querySelectorAll('.checkbox-option'));
// Get our category container:
const listContainer = document.getElementById('category-list-container');

// Initialize state:
let selectorState = [];

// Replicate keyboard functionality from select elements:
dropdownContainer.addEventListener('keyup', (e) => {
  dropDownKeyListener(e.key, selectorState, listContainer, optionsArray, dropdownButton);
});

// Add event listener to checkboxes to update state:
Array.from(checkboxes).forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    // Update the check box state
    if (event.target.dataset.checked === 'true') {
      event.target.dataset.checked = false;
      const index = selectorState.indexOf(event.target.value);
      selectorState.splice(index, 1);
      // Find and remove badge:
      document.getElementById(`${event.target.value}-badge`).remove();
    } else if (event.target.dataset.checked === 'false') {
      event.target.dataset.checked = true;
      selectorState.push(event.target.value);
    }
    updateDOMandURL(selectorState);
  });
});

dropdownButton.addEventListener('click', () => {
  expandTarget(listContainer.id);
});

window.onload = function () {
  selectorState = getSearchParam('filters').split(';');
  // If selector state is empty string, set to empty array
  if (selectorState[0] === '') {
    selectorState = [];
  }
  // Remove items not allowed in the tags list:
  const tempState = selectorState.filter((item) => {
    if (TAGS.includes(item)) {
      return item;
    }
  });
  selectorState = tempState;
  // Set checkboxes on load:
  for (let item in selectorState) {
    if (TAGS.includes(selectorState[item])) {
      document.getElementById(selectorState[item]).checked = true;
      document.getElementById(selectorState[item]).dataset.checked = true;
    }
  };
  // Close the dropdown if user clicks outside of it:
  document.addEventListener('click', (e) => {
    const didClickedOutside = !dropdownContainer.contains(e.target);
    if (didClickedOutside && !listContainer.hasAttribute('hidden')) {
      expandTarget(listContainer.id);
    }
  });
  updateDOMandURL(selectorState);
};
