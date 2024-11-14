// Grab all of the <details> elements and convert the Nodelist into an array:
const getDetails = () => Array.from(document.querySelectorAll('details.expand'));

export default getDetails;
