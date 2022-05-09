// Get our checkboxes:
const checkboxes = document.getElementsByClassName('usa-checkbox__input');
const checkboxState = {
    "title-ii": false,
    "title-iii": false
};

Array.from(checkboxes).forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
      // Update the check box state
    if (event.target.checked) {
        checkboxState[event.target.value] = event.target.checked;
    } else {
        checkboxState[event.target.value] = event.target.checked;
    }
  });
});
