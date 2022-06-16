import moveFocus from '../moveFocus';
import findFocus from '../findFocus';
import expandTarget from './expandTarget';
import updateDOMandURL from './updateDomAndURL';

export default function dropDownKeyListener(whichKey, state, listContainer, optionsArray, dropdownButton) {
    const currentFocus = findFocus();
    switch (whichKey) {
      case 'Enter':
        // If on li element, check box. If box checked, uncheck box
        if (!listContainer.hasAttribute('hidden') && currentFocus.tagName === 'INPUT') {
          if (currentFocus.dataset.checked === 'true') {
            currentFocus.dataset.checked = false;
            currentFocus.checked = false;
            let index = state.indexOf(currentFocus.value);
            state.splice(index, 1);
            // Find and remove badge:
            document.getElementById(`${currentFocus.value}-badge`).remove();
          } else if (currentFocus.dataset.checked === 'false') {
            currentFocus.dataset.checked = true;
            state.push(currentFocus.value);
            currentFocus.checked = true;
          }
          updateDOMandURL(state);
        }
        break;
  
      case 'Escape':
        // If open and foucs on LI element, close, otherwise do nothing
        if (
          !listContainer.hasAttribute('hidden') &&
          (currentFocus.tagName === 'INPUT' || currentFocus.id === 'category-expand')
        ) {
          expandTarget(listContainer.id);
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