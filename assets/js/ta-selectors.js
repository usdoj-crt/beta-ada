import { TAGS } from './utils/constants';
import expandTarget from './utils/taSelectors/expandTarget';
import updateDOMandURL from './utils/taSelectors/updateDomAndURL';
import dropDownKeyListener from './utils/taSelectors/dropDownKeyListener';
import { getSearchParam } from './utils/searchParamUtils';
import { accessStorage } from './utils/getSetlocalStorage';
import userClickedAnchorLink from './utils/userClickedAnchorLink';

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
// Define our param name for both localStorage key and search param name:
const paramName = 'filters';

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
  // Get our saved filter state either by using localStorage or by using the URL search params.
  // We want to use local storage in the case that someone is navigating by links to return to the resources page
  // This won't invoke the browser's history, so we need another way to grab the previous state of the checkboxes
  // When navigating via link, the search params in the link will be empty, so if we have them in local storage, lets use them:
  if (userClickedAnchorLink(paramName)) {
    selectorState = accessStorage(paramName).split(';');
  } else {
  // If we have search params available in the URL, use them to populate state
    selectorState = getSearchParam(paramName).split(';');
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
