const archiveURL = 'https://archive.ada.gov';
const targetDOMNode = document.getElementById('404-suggested-link');
const currentPathName = document.location.pathname;
let endpoint = `${archiveURL}${currentPathName}`;

if ((currentPathName.includes('.doc')) || (currentPathName.includes('.docx')) || (currentPathName.includes('.php')) || (currentPathName.includes('.pdf'))) {
    targetDOMNode.innerText = endpoint;
    targetDOMNode.href = endpoint;
}



