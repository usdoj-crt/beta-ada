// Imports:
//= require ./renderSearchResults.js
//= require ../templates/paginationTemplate.js
//= require ./applyFocusStyling.js
//= require ./createRange.js
//= require ../templates/textBestBetsTemplate.js
//= require ../templates/searchResultsTemplate.js
//= require ./constants.js

const renderSearchPage = async (searchResults, urlParams) => {
  const results = await searchResults;
  const { NUMBER_OF_RESULTS } = paginationConstants();
  const textResults = results.text_best_bets;
  const webResults = results.web.results;
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
    // Grab our pagination list node that will contain the pagination:
    const pagination_list = document.querySelectorAll(
      "ul.usa-pagination__list"
    )[0];
    // Put the fetched results into a list, and render in the DOM:
    webResults.forEach(function (item) {
      renderSearchResults(searchResultsTemplate(item));
    });
    // FOR PAGINATION:
    // Generate our results pages array:
    const offsetValueArray = createRange(0, results.web.total, NUMBER_OF_RESULTS);
    // Generate our html template:
    let page_links = paginationTemplate(offsetValueArray, urlParams);
    // HEY IS THIS DANGEROUS???
    // Put our template into the DOM:
    pagination_list.innerHTML = page_links;
    // Apply focus styling to our new pagination list:
    applyFocusStyling();
    // Previous and Next button functionality:
    const prevLink = document.querySelector(".usa-pagination__previous-page");
    const nextLink = document.querySelector(".usa-pagination__next-page");
    const currentOffset = urlParams.get("offset");
    if (results.web.total > NUMBER_OF_RESULTS) {
      document.getElementById("pagination-nav").removeAttribute("hidden");

      if (currentOffset > 0) {
        urlParams.set("offset", currentOffset - NUMBER_OF_RESULTS);
        prevLink.href = `?${urlParams.toString()}`;
      } else {
        prevLink.setAttribute("disabled", "true");
      }

      if (results.web.next_offset) {
        urlParams.set("offset", results.web.next_offset);
        nextLink.href = `?${urlParams.toString()}`;
      } else {
        nextLink.setAttribute("disabled", "true");
      }
    }
  }
  if (document.getElementById("search-results").childNodes.length == 0) {
    renderSearchResults(
      `<li class="h4" style="list-style: none">No results found</li>`,
      false
    );
  } else {
    var target = document.querySelector("#top");
    target.insertAdjacentHTML(
      "afterend",
      '<div class=" text-base">Sorted by most relevant</div>'
    );
  }
};
