import { replaceState } from './utils/replaceHistory';
import renderBadges from './templates/badges/renderBadges';
import toggleVisibility from './utils/toggleVisibility';
import checkURL from './utils/checkURLOnLoad';
import totalResults from './templates/search/totalResultsTemplate';
import { TAGS } from './utils/constants';
import expandTarget from './utils/expandTarget';

// Get our checkboxes:
const checkboxes = document.getElementsByClassName('usa-checkbox__input');
// Get our dropdown:
const dropdownButton = document.getElementById('category-expand');
// Get our tag node:
const tagNode = document.getElementById('selector-tags');
// Create a new unordered list to put our tags:
const list = document.createElement('ul');
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

dropdownButton.addEventListener('click', ()=> {
  expandTarget("category-list-container");
})

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
  if (selectorState[0]=== '') {
    selectorState = [];
  }
  setSelectedValue(selectorState);
  updateDOMandURL();
};
