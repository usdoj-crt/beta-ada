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
const selectorState = {
  'title-ii': false,
  'title-iii': false,
  category: '',
};

// Update badges and update the url:
const updateDOMandURL = (parentID) => {
  replaceState(
    selectorState,
    'updatedState',
    `/resources/?org=title-ii=${selectorState['title-ii']};title-iii=${selectorState['title-iii']};category=${selectorState['category']}`
  );
  renderBadges(list, selectorState, parentID);
};

// Update checkbox state:
Array.from(checkboxes).forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    // Update the check box state
    if (event.target.checked) {
      selectorState[event.target.value] = event.target.checked;
    } else {
      selectorState[event.target.value] = event.target.checked;
    }
    updateDOMandURL(event.target.id);
    document.getElementById('resultsListTarget').innerHTML = totalResults(
      toggleVisibility(selectorState),
      'item'
    );
  });
});

// Update dropdown state:
dropdown.addEventListener('change', (event) => {
  selectorState['category'] = event.target.value;
  updateDOMandURL(event.target.name);
  document.getElementById('resultsListTarget').innerHTML = totalResults(
    toggleVisibility(selectorState),
    'item'
  );
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
      renderBadges(list, selectorState, 'title-ii');
      renderSelector('title-ii', selectorState);
    }
    if (params[1].includes('true')) {
      selectorState['title-iii'] = true;
      renderBadges(list, selectorState, 'title-iii');
      renderSelector('title-iii', selectorState);
    }
    if (params[2].split('=').length >= 2) {
      const category = params[2].split('=');
      selectorState['category'] = category[1];
      renderBadges(list, selectorState, 'category');
      document.querySelector('div.usa-combo-box').classList.add('usa-combo-box--pristine');
      document.querySelector('input[role="combobox"]').setAttribute('aria-activedescendant', '');
      setSelectedValue(document.querySelector('select[name="category"]'), selectorState.category);
    }
    document.getElementById('resultsListTarget').innerHTML = totalResults(
      toggleVisibility(selectorState),
      'item'
    );
  }
};
