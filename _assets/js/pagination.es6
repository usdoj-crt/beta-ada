//= require ./utils/renderSearchResults.js
//= require ./templates/pagination/paginationTemplate.js
//= require ./utils/constants.js
//= require ./utils/applyFocusStyling.js
//= require ./templates/search/textBestBetsTemplate.js
//= require ./templates/search/searchResultsTemplate.js
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
  fetch(searchEndpoint)
    .then((results) => results)
    .then((res) => res.json())
    .then((resJSON) => renderSearchPage(resJSON, urlParams))
    .catch((error) => {
      console.log("parsing failed", error);
    });
}
