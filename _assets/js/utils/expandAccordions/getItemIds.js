import getAccordions from "./getAccordions";
import getDetails from "./getDetails";

// Generate a list of all the controllable element ids so we can reference them using aria-controls in our button.
const getItemIds = (parentButton) => {
    let ids = [];
    getAccordions().forEach((acc) => ids.push(acc.id));
    getDetails().forEach((det) => ids.push(det.id));
    ids = ids.join(' ');
    parentButton.setAttribute('aria-controls', ids);
  };

export default getItemIds;