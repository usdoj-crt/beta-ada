// Imports:
//= require ./utils/constants.js 
//= require ./api/fetchResults.js
//= require ./utils/renderSearchResults.js
//= require ./templates/paginationTemplate.js
//= require ./utils/applyFocusStyling.js
//= require ./templates/textBestBetsTemplate.js
//= require ./templates/searchResultsTemplate.js
//= require ./utils/renderSearchPage.js

const {NUMBER_OF_RESULTS, SEARCH_ENDPOINT, AFFILIATE, ACCESS_KEY} = paginationConstants();

// If there's search content, run the code, otherwise, don't:
if (window.location.search) {
  // Set up the search parameters:
  let urlParams = new URLSearchParams(window.location.search);
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
  // Get the results:
  const searchResultsJSON = async () => {
    const searchResults = await fetchResults(searchEndpoint);
    return searchResults;
  };
  // Render the results:
  renderSearchPage(searchResultsJSON(), urlParams)
}
