// Extending the functionality of the navigation.js code from USWDS
const MENUBUTTON = document.querySelector('button.usa-menu-btn');
const CLOSEBUTTON = document.querySelector('button.usa-nav__close');
const NONNAVELEMENTS = document.querySelectorAll('body > *:not(.usa-header):not([aria-hidden])');
let childrenArray = [];

const getChildrenElements = (nonNavElements) => {
  let nonNavArray = Array.from(nonNavElements);
  for (let i=0; i<nonNavArray.length; i++) {
    if (nonNavArray[i].nodeType === 1) {
      childrenArray.push(nonNavArray[i]);
    }
    if (nonNavArray[i].hasChildNodes()) {
      getChildrenElements(nonNavArray[i].childNodes);
    }
  }
  return childrenArray;
};

const hideNonNavItems = (nonNavArr) => {
  // Add disabled attribute to parent elements:
  NONNAVELEMENTS.forEach((element) => {
    element.setAttribute('disabled', true);
  });

  nonNavArr.forEach((nonNavElement) => {
    //Add tabindex to non-header elements
    nonNavElement.setAttribute('tabindex', -1);
  });
};

const showNonNavItems = (nonNavArr) => {
  if (nonNavArr.length === 0) {
    return;
  }
  // Remove disabled attribute to parent elements:
  NONNAVELEMENTS.forEach((element) => {
    element.removeAttribute('disabled');
  });

  // Remove tabindex from non-header elements
  nonNavArr.forEach((nonNavElement) => {
    nonNavElement.removeAttribute('tabindex');
  });
};

// Toggle all non-header elements.
const toggleNonNavItems = (active) => {
  let childArr = getChildrenElements(NONNAVELEMENTS);
  //let flattenedChildArr = flatDeep(childArr, Infinity);
  if (active) {
    showNonNavItems(childArr);
  } else {
    hideNonNavItems(childArr);
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
