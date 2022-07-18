// Grab all of the accordion buttons except for the table of contents button and convert the Nodelist into an array:
const getAccordionButtons = () =>
  Array.from(document.querySelectorAll('.expand button.usa-accordion__button.pa11y-skip'));


export default getAccordionButtons;