// Imports:
import renderSearchResults from './renderSearchResults';
import applyFocusStyling from './applyFocusStyling';
import createRange from './createRange';
import wrapUrls from './wrapUrls';
import bestBetsSectionTemplate from '../templates/search/bestBetsSectionTemplate';
import graphicBestBetsTemplate from '../templates/search/graphicBestBetsTemplate';
import graphicBestBetsSectionTemplate from '../templates/search/graphicBestBetsSectionTemplate';
import paginationTemplate from '../templates/pagination/paginationTemplate';
import textBestBetsTemplate from '../templates/search/textBestBetsTemplate';
import searchResultsTemplate from '../templates/search/searchResultsTemplate';
import totalResults from '../templates/search/totalResultsTemplate';
import clickTracking from '../click-tracking';

export default function renderSearchPage(searchResults, urlParams, numberOfResults) {
  const results = searchResults;
  console.log(results);
  const graphicResults = results.graphic_best_bets;
  const textResults = results.text_best_bets;
  const webResults = results.web.results;
  let webTotalResults = results.web.total;
  const target = document.getElementById('totalResultsTarget');
  // Then check if this key has any values:
  if (textResults.length) {
    const bestBetResults = textResults.map((item) => textBestBetsTemplate(item));
    const bestBetsSection = bestBetsSectionTemplate(bestBetResults);
    renderSearchResults(bestBetsSection);
  }
  if (graphicResults.length) {
    const bestBetGraphicResults = graphicResults.map((item) => graphicBestBetsTemplate(item));
    const bestBetsGraphicSection = graphicBestBetsSectionTemplate(bestBetGraphicResults);
    renderSearchResults(bestBetsGraphicSection);
  }
  if (textResults.length || graphicResults.length) {
    renderSearchResults(
      `<p markdown="0" class="total-results margin-top-4">All search results</p>`
    );
  }
  if (webResults.length) {
    // Set the offset value to 0 initially, this helps with styling the first page icon:
    if (urlParams.get('offset') === null) {
      urlParams.set('offset', 0);
    }
    // Cap the results total since search.gov is only returning 1000 results:
    if (webTotalResults > 1000) {
      webTotalResults = 1000;
    }
    // Grab our pagination list node that will contain the pagination:
    const pagination_list = document.querySelectorAll('ol.usa-pagination__list')[0];
    // Put the fetched results into a list, and render in the DOM:
    webResults.forEach(function (item) {
      renderSearchResults(searchResultsTemplate(item));
    });
    // Set up click tracking for search.gov:
    clickTracking();
    // List the total number of results:
    target.innerHTML = totalResults(webTotalResults, 'result', `for '` + results.query + `'`);
    // FOR PAGINATION:
    // Generate our results pages array:
    const offsetValueArray = createRange(0, webTotalResults, numberOfResults);
    // Generate our html template:
    const page_links = paginationTemplate(offsetValueArray, urlParams);
    // Put our template into the DOM:
    pagination_list.innerHTML = page_links;
    // Apply focus styling to our new pagination list:
    applyFocusStyling();
    // Previous and Next button functionality:
    const prevLink = document.querySelector('.usa-pagination__previous-page');
    const nextLink = document.querySelector('.usa-pagination__next-page');
    const currentOffset = urlParams.get('offset');
    if (webTotalResults > numberOfResults) {
      document.getElementById('pagination-nav').removeAttribute('hidden');

      if (currentOffset > 0) {
        urlParams.set('offset', currentOffset - numberOfResults);
        prevLink.href = `?${urlParams.toString()}`;
        prevLink.ariaDisabled = 'false';
        prevLink.tabIndex = 0;
      } else {
        prevLink.setAttribute('disabled', 'true');
        prevLink.ariaDisabled = 'true';
        prevLink.tabIndex = -1;
      }

      if (results.web.next_offset) {
        urlParams.set('offset', results.web.next_offset);
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
  if (document.getElementById('search-results').childNodes.length == 0) {
    target.innerHTML = totalResults(webTotalResults, 'result', `for '` + results.query + `'`);
  } else {
    const urlsToWrap = document.querySelectorAll('.content-url');
    Array.prototype.forEach.call(urlsToWrap, function (url) {
      const wrapped = wrapUrls(url.innerHTML);
      return (url.innerHTML = wrapped);
    });
  }
}
