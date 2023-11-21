// Grab all of the accordions and convert the Nodelist into an array:
const getAccordions = () => {
    const regexp = /accordion-expandable\-*/gm;
    const accordions = Array.from(
      document.querySelectorAll('.expand div.usa-accordion__content')
    ).filter((accordion) => accordion.id.match(regexp));
    return accordions;
  };

export default getAccordions;