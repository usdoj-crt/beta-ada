const expandButtonTextIsOpen = (openAccordionsButton) => {
    // Button text reads: "Open all sections"
    if (openAccordionsButton && openAccordionsButton.getAttribute('data-open') === 'false') {
        return true;
      }
    // Button text reads: "Close all sections"
    return false;
}

export default expandButtonTextIsOpen;