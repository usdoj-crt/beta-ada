// Grab the current URL
// Check if the pathname exists at the legacy site
// Append the remainder of the URL onto constant archive.ada.gov
// Put that link into a suggestion area in DOM

const archiveURL = 'https://www.ada.gov';
const targetDOMNode = document.getElementById('suggested-link');
const currentPathName = document.location.pathname;
let endpoint = `${archiveURL}${currentPathName}`;

let xhr = new XMLHttpRequest();

function checkExists() {
    if (this.status === 200) {

    }
  }
  // If timeout:
  function reqTimeout() {

}

xhr.open('GET', endpoint, true);

xhr.onload = () => {
    console.log('DONE', xhr.readyState); // readyState will be 4
};

xhr.send(null);
