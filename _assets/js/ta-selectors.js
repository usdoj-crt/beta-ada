import { replaceState } from "./utils/replaceHistory";
import tags from "./templates/tags";

// Get our checkboxes:
const checkboxes = document.getElementsByClassName('usa-checkbox__input');
// Get our dropdown:
const dropdown = document.getElementById('ta-category-selector');
// Get our tag node:
const tagNode = document.getElementById('selector-tags');
// Create a new unordered list to put our tags:
const list = document.createElement('ul');
list.classList.add('usa-button-group');
// Add the list to our container div: 
tagNode.append(list);

// Initialize state:
const selectorState = {
    "title-ii": false,
    "title-iii": false,
    "category": ""
};

const updateDOMandURL = () => {
  replaceState(selectorState, 'updatedState', `/resources/?org=title-ii=${selectorState['title-ii']};title-iii=${selectorState['title-iii']};category=${selectorState['category']}`)
  tags(list, selectorState);
}

// Update checkbox state:
Array.from(checkboxes).forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
      // Update the check box state
    if (event.target.checked) {
        selectorState[event.target.value] = event.target.checked;
    } else {
        selectorState[event.target.value] = event.target.checked;
    }
    updateDOMandURL();
  });
});

// Update dropdown state:
dropdown.addEventListener('change', (event)=> {
  selectorState['category'] = event.target.value;
  updateDOMandURL();
});

