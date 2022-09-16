import debounce from './debounce';

// Set initial scroll pos:
let yPos = window.pageYOffset;
// Set up some flags to monitor intersection and whether we are scrolling up:
let isIntersecting = true;
let scrollUp = false;
// Button to show or hide:
const buttonId = 'crt-back-to-top-button';
const button = document.getElementById(buttonId);
// Class Names:
const blockDisplay = 'mobile:display-block';
const noDisplay = 'mobile:display-none';
// Target element for intersection observer:
const topElement = 'crt-page--sidenav';
const observerTarget = document.getElementById(topElement);
// Observer Options:
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

// Functions to toggle classes
const show = () => {
  button.classList.add(blockDisplay);
  button.classList.remove(noDisplay);
};
const hide = () => {
  button.classList.add(noDisplay);
  button.classList.remove(blockDisplay);
};

// Function to check scroll position, set flags for scrolling up, and for calling toggleShow
const checkYPos = () => {
  // Get page-Y-offset value with every scroll
  let scroll = window.pageYOffset;

  // If the scroll is greater than position, user has scrolled down, else they scrolled up
  scroll < yPos ? (scrollUp = true) : null;
  // Set the position equal to scroll
  yPos = scroll;
  toggleShow();
};

// If we are not intersecting the Table of Contents and scrolling up, then show the back to top button. Else, If we are intersecting the Table Of Contents, hide the Back to top button.
const toggleShow = () => {
  if (!isIntersecting && scrollUp) {
    show();
  } else if (isIntersecting) {
    hide();
  }
};

//Intersection Observer Callback. Switches our flag state based on whether we are intersecting.
const checkForIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isIntersecting = true;
      scrollUp = false;
    } else {
      scrollUp = false;
      isIntersecting = false;
    }
  });
};
// Observer:
let intObserver = new IntersectionObserver(checkForIntersection, options);
// Observe:
intObserver.observe(observerTarget);
const handleScroll = debounce(checkYPos, 50);
document.addEventListener('scroll', handleScroll);
