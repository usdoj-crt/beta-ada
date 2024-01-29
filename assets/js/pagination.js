import { NUMBER_OF_RESULTS, SEARCH_ENDPOINT, ACCESS_KEY, AFFILIATE } from './utils/constants';
import renderSearchPage from './utils/renderSearchPage';
import totalResults from './templates/search/totalResultsTemplate';
import { _ } from 'core-js';

// Set up the search parameters:
let urlParams = new URLSearchParams(window.location.search);
let searchEndpoint = new URL(SEARCH_ENDPOINT);
let searchParams = {
  affiliate: AFFILIATE,
  access_key: ACCESS_KEY,
  query: urlParams.get('query'),
  offset: urlParams.get('offset') || 0,
  limit: NUMBER_OF_RESULTS,
  audience: urlParams.get('audience'),
};
// Add our total number of results DOM node:
const target = document.getElementById('totalResultsTarget');
const hiddenQueryInput = document.getElementById('hiddenQuery');
hiddenQueryInput.value = urlParams.get('query');
document.querySelectorAll('.usa-checkbox__input').forEach((checkbox) => {
  if (checkbox.value == urlParams.get('audience')) {
    checkbox.setAttribute('data-checked', true);
  } else {
    checkbox.setAttribute('data-checked', false);
  }
})
Object.keys(searchParams).forEach(function (key) {
  searchEndpoint.searchParams.append(key, searchParams[key]);
});
// Get the results, convert them to JSON, then render them:
// When the results are returned, check that the status is 200
// then render the results:
function reqLoaded() {
  if (this.status === 200) {
    let resJSON = JSON.parse(this.responseText);
    renderSearchPage(resJSON, urlParams, NUMBER_OF_RESULTS);
  } else {
    target.innerHTML = totalResults(-1, 'result');
  }
}
// If timeout:
function reqTimeout() {
  target.innerHTML = totalResults(-1, 'result');
}

let req = new XMLHttpRequest();
req.addEventListener('load', reqLoaded);
req.open('GET', searchEndpoint);
req.timeout = 5000; //timeout after 5 seconds
req.addEventListener('timeout', reqTimeout);
req.send();
