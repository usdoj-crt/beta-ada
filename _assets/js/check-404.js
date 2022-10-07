// Grab the current URL
// Check if the pathname exists at the legacy site
// Append the remainder of the URL onto constant archive.ada.gov
// Put that link into a suggestion area in DOM

const archiveURL = 'https://www.ada.gov';
const targetDOMNode = document.getElementById('suggested-link');
const currentPathName = document.location.pathname;
let endpoint = `${archiveURL}${currentPathName}`;

targetDOMNode.href = endpoint;
targetDOMNode.innerText = endpoint;


