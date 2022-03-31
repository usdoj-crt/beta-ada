// Extending the functionality of the navigation.js code from USWDS
const NON_NAV_ELEMENTS = 'body > *:not(.usa-header):not([aria-hidden])';
const NON_NAV_HIDDEN = '[data-nav-hidden]';

const MENUBUTTON = document.querySelector('button.usa-menu-btn');
const CLOSEBUTTON = document.querySelector('button.usa-nav__close');

const hideNonNavItems = () => {
  nonNavElements = document.querySelectorAll(NON_NAV_ELEMENTS);

  nonNavElements.forEach((nonNavElement) => {
    nonNavElement.setAttribute('disabled', true);
  });
};

const showNonNavItems = () => {
  nonNavElements = document.querySelectorAll(NON_NAV_HIDDEN);

  if (!nonNavElements) {
    return;
  }

  // Remove aria-hidden from non-header elements
  nonNavElements.forEach((nonNavElement) => {
    nonNavElement.removeAttribute('disabled');
  });
};

// Toggle all non-header elements #3527.
const toggleNonNavItems = (active) => {
  if (active) {
    showNonNavItems();
  } else {
    hideNonNavItems();
  }
};

// Add event listener to menu button:
MENUBUTTON.addEventListener('click', (e) => {
  e.preventDefault();
  toggleNonNavItems(false);
});

// Add an event listener to the close button:
CLOSEBUTTON.addEventListener('click', (e) => {
  e.preventDefault();
  toggleNonNavItems(true);
});
