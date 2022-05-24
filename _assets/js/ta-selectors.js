import { replaceState } from './utils/replaceHistory';
import renderBadges from './templates/badges/renderBadges';
import toggleVisibility from './utils/toggleVisibility';
import checkURL from './utils/checkURLOnLoad';
import totalResults from './templates/search/totalResultsTemplate';
import { TAGS } from './utils/constants';

// Get our checkboxes:
const checkboxes = document.getElementsByClassName('usa-checkbox__input');
// Get our dropdown:
const dropdown = document.getElementById('category');
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

// Update dropdown state:
dropdown.addEventListener('change', (event) => {
  if (event.target.value !== '' && selectorState.includes(event.target.value) === false) {
    selectorState.push(event.target.value);
  }
  updateDOMandURL();
});


function setSelectedValue(state) {
 if (state.includes('title-ii')) {
  document.getElementById('title-ii').checked = true; 
  document.getElementById('title-ii').dataset.checked = true;
 }
 if (state.includes('title-iii')){
  document.getElementById('title-iii').checked = true;
  document.getElementById('title-iii').dataset.checked = true;
 }
 for (let item in state) {
   if (TAGS.includes(state[item]) && state[item] !=='title-ii' && state[item]!=='title-iii') {
     let normalizedTag = state[item].split('-').join(" ");
     document.getElementById('category').value = `${normalizedTag[0].toUpperCase() + normalizedTag.substring(1)}`;
     document.querySelector('.usa-combo-box').classList.add('usa-combo-box--pristine');
   } else {
    document.getElementById('category').value = 'Select a category';
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
