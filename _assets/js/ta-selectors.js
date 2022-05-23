import { replaceState } from './utils/replaceHistory';
import renderBadges from './templates/badges/renderBadges';
import toggleVisibility from './utils/toggleVisibility';
import checkURL from './utils/checkURLOnLoad';
import renderSelector from './utils/updateTASelectors';
import totalResults from './templates/search/totalResultsTemplate';

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
  replaceState(
    selectorState,
    'updatedState',
    `/resources/?filters=${selectorState.join(';')}`
  );
  renderBadges(list, selectorState);
};

// Update checkbox state:
Array.from(checkboxes).forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    // Update the check box state
    if (event.target.dataset.checked === 'true') {
      event.target.dataset.checked = false;
      let index = selectorState.indexOf(event.target.value)
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
  if (event.target.value !== '' && (selectorState.includes(event.target.value) === false)) {
    selectorState.push(event.target.value);
  }
  updateDOMandURL();
});

// Update the dropdown value when the url is called:
function setSelectedValue(selectObj, valueToSet) {
  for (let i = 0; i < selectObj.options.length; i++) {
    if (selectObj.options[i].value === valueToSet) {
      selectObj.options[i].selected = true;
      document.querySelector('input[role="combobox"]').value = selectObj.options[i].text;
      return;
    }
  }
}

function getInitiallyVisibleItems() {
  document.getElementById('resultsListTarget').innerHTML = totalResults(
    Array.from(document.querySelectorAll('li.visibilityTarget')).length,
    'item'
  );
}

window.onload = function () {
  getInitiallyVisibleItems();
  const params = checkURL('org');
  if (params.length === 3) {
    if (params[0].includes('true')) {
      selectorState['title-ii'] = true;
      renderBadges(list, selectorState, categoryArray, 'title-ii');
      renderSelector('title-ii', selectorState);
    }
    if (params[1].includes('true')) {
      selectorState['title-iii'] = true;
      renderBadges(list, selectorState, categoryArray, 'title-iii');
      renderSelector('title-iii', selectorState);
    }
    // if (params[2].split('=').length >= 2) {
    //   const category = params[2].split('=');
    //   selectorState['category'] = category[1];
    //   renderBadges(list, selectorState, categoryArray, 'category');
    //   document.querySelector('div.usa-combo-box').classList.add('usa-combo-box--pristine');
    //   document.querySelector('input[role="combobox"]').setAttribute('aria-activedescendant', '');
    //   setSelectedValue(document.querySelector('select[name="category"]'), selectorState.category);
    // }
    document.getElementById('resultsListTarget').innerHTML = totalResults(
      toggleVisibility(selectorState),
      'item'
    );
  }
};
