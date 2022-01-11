//= require ./templates/pagination/paginationTemplate.js
//= require ./templates/search/textBestBetsTemplate.js
//= require ./templates/search/searchResultsTemplate.js
//= require ./utils/renderSearchResults.js
//= require ./utils/constants.js
//= require ./utils/applyFocusStyling.js
//= require ./utils/renderSearchPage.js

var paginationConstants = paginationConstants();
var NUMBER_OF_RESULTS = paginationConstants.NUMBER_OF_RESULTS;
var SEARCH_ENDPOINT = paginationConstants.SEARCH_ENDPOINT;
var AFFILIATE = paginationConstants.AFFILIATE;
var ACCESS_KEY = paginationConstants.ACCESS_KEY;

  // Set up the search parameters:
  var urlParams = new URLSearchParams(window.location.search);
  var searchEndpoint = new URL(SEARCH_ENDPOINT);
  var searchParams = {
    affiliate: AFFILIATE,
    access_key: ACCESS_KEY,
    query: urlParams.get("query"),
    offset: urlParams.get("offset") || 0,
    limit: NUMBER_OF_RESULTS,
  };

  Object.keys(searchParams).forEach(function(key) {
    searchEndpoint.searchParams.append(key, searchParams[key])
  });
  // Get the results, convert them to JSON, then render them:
  // When the results are returned, check that the status is 200
  // then render the results:
  function reqLoaded () {
    if (this.status === 200) {
      var resJSON = JSON.parse(this.responseText);
      renderSearchPage(resJSON , urlParams, NUMBER_OF_RESULTS);
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

  var req = new XMLHttpRequest();
  req.addEventListener("load", reqLoaded);
  req.open("GET", searchEndpoint);
  req.timeout = 5000; //timeout after 5 seconds
  req.addEventListener("timeout", reqTimeout);
  req.send();
