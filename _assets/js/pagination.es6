//= require ./templates/pagination/paginationTemplate.js
//= require ./templates/search/textBestBetsTemplate.js
//= require ./templates/search/searchResultsTemplate.js
//= require ./utils/renderSearchResults.js
//= require ./utils/constants.js
//= require ./utils/applyFocusStyling.js
//= require ./utils/renderSearchPage.js

const { NUMBER_OF_RESULTS, SEARCH_ENDPOINT, AFFILIATE, ACCESS_KEY } =
  paginationConstants();

// If there's search content, run the code, otherwise, don't:
if (window.location.search) {
  // Set up the search parameters:
  const urlParams = new URLSearchParams(window.location.search);
  const searchEndpoint = new URL(SEARCH_ENDPOINT);
  const params = {
    affiliate: AFFILIATE,
    access_key: ACCESS_KEY,
    query: urlParams.get("query"),
    offset: urlParams.get("offset") || 0,
    limit: NUMBER_OF_RESULTS,
  };

  Object.keys(params).forEach((key) =>
    searchEndpoint.searchParams.append(key, params[key])
  );
  // Get the results, convert them to JSON, then render them:
  // When the results are returned, check that the status is 200
  // then render the results:
  function reqLoaded () {
    if (this.status === 200) {
      let resJSON = JSON.parse(this.responseText);
      renderSearchPage(resJSON , urlParams);
    } else {
      renderSearchResults(
        `${noResults()}`,
        false
      );
    }
  }
  // If timeout:
  function reqTimeout () {
    renderSearchResults(
      `${noResults()}`,
      false
    );
  }
  
  let req = new XMLHttpRequest();
  req.addEventListener("load", reqLoaded);
  req.open("GET", searchEndpoint);
  req.timeout = 10000; //timeout after 10 seconds
  req.addEventListener("timeout", reqTimeout);
  req.send();
}
