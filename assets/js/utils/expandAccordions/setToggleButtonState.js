// Toggle the state of the main toggle button:
// If the toggle button is open and clicked, change it's state to the opposite:
const isOpen = (button) => {
  button.setAttribute('data-open', 'false');
  button.setAttribute('aria-expanded', 'false');
  button.innerText = 'Open all sections';
  return false;
};

// If the toggle button is closed and clicked, change it's state to the opposite:
const isClosed = (button) => {
  button.setAttribute('data-open', 'true');
  button.setAttribute('aria-expanded', 'true');
  button.innerText = 'Close all sections';
  return true;
};

// Change the text within the open all button and swap the value of the data open attribute:
const toggleButtonText = (button) => {
  if (button.getAttribute('data-open') === 'true') {
    return isOpen(button);
  } else if (button.getAttribute('data-open') === 'false') {
    return isClosed(button);
  }
};

export { isOpen, isClosed, toggleButtonText };
