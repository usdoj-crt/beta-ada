// Imports:
//= require ./renderSearchResults.js
//= require ./applyFocusStyling.js
//= require ./createRange.js
//= require ./constants.js
//= require ./wrapUrls.js
//= require ../templates/pagination/paginationTemplate.js
//= require ../templates/search/textBestBetsTemplate.js
//= require ../templates/search/searchResultsTemplate.js
//= require ../templates/search/sortedByTemplate.js
//= require ../templates/search/noResultsTemplate.js
//= require ../templates/search/totalResultsTemplate.js

function renderSearchPage(searchResults, urlParams, numberOfResults) {
  var results = searchResults;
  var textResults = results.text_best_bets;
  var webResults = results.web.results;
  // Then check if this key has any values:
  if (textResults.length) {
    textResults.forEach(function (item) {
      // If it does, slap this into the DOM
      renderSearchResults(textBestBetsTemplate(item));
    });
  }
  if (webResults.length) {
    // Set the offset value to 0 initially, this helps with styling the first page icon:
    if (urlParams.get("offset") === null) {
      urlParams.set("offset", 0);
    }
    // Cap the results total since search.gov is only returning 1000 results:
    var webTotalResults = results.web.total;
    if (webTotalResults > 1000) {
      webTotalResults = 1000;
    }
    // Grab our pagination list node that will contain the pagination:
    var pagination_list = document.querySelectorAll(
      "ol.usa-pagination__list"
    )[0];
    // Put the fetched results into a list, and render in the DOM:
    webResults.forEach(function (item) {
      renderSearchResults(searchResultsTemplate(item));
    });
    // FOR PAGINATION:
    // Generate our results pages array:
    var offsetValueArray = createRange(0, webTotalResults, numberOfResults);
    // Generate our html template:
    let page_links = paginationTemplate(offsetValueArray, urlParams);
    // Put our template into the DOM:
    pagination_list.innerHTML = page_links;
    // Apply focus styling to our new pagination list:
    applyFocusStyling();
    // Previous and Next button functionality:
    var prevLink = document.querySelector(".usa-pagination__previous-page");
    var nextLink = document.querySelector(".usa-pagination__next-page");
    var currentOffset = urlParams.get("offset");
    if (webTotalResults > numberOfResults) {
      document.getElementById("pagination-nav").removeAttribute("hidden");

      if (currentOffset > 0) {
        urlParams.set("offset", currentOffset - numberOfResults);
        prevLink.href = `?${urlParams.toString()}`;
        prevLink.ariaDisabled = 'false';
        prevLink.tabIndex = 0;
      } else {
        prevLink.setAttribute('disabled', 'true');
        prevLink.ariaDisabled = 'true';
        prevLink.tabIndex = -1;
      }

      if (results.web.next_offset) {
        urlParams.set("offset", results.web.next_offset);
        nextLink.href = `?${urlParams.toString()}`;
        nextLink.ariaDisabled = 'false';
        nextLink.tabIndex = 0;
      } else {
        nextLink.setAttribute('disabled', 'true');
        nextLink.ariaDisabled = 'true';
        nextLink.tabIndex = -1;
      }
    }
  }
  if (document.getElementById("search-results").childNodes.length == 0) {
    renderSearchResults(
      `${noResults()}`,
      false
    );
  } else {
    var target = document.querySelector(".crt-landing--separator_small");
    target.insertAdjacentHTML(
      "afterend",
      totalResults(webTotalResults)
    );
    var urlsToWrap = document.querySelectorAll(".content-url");
    Array.prototype.forEach.call(urlsToWrap, function(url) {
      var wrapped = wrapUrls(url.innerHTML);
      return (url.innerHTML = wrapped);
    });
  }
};
