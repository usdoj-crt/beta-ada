import { NUMBER_OF_RESULTS } from "../constants";

// If you are viewing the first page of results,
// display the first, second, third and fourth pagination
// buttons.
const firstPage = function (offsetArrayVal, offsetParamVal) {
  return (
    offsetParamVal === 0 &&
    (offsetArrayVal === offsetParamVal + NUMBER_OF_RESULTS ||
      offsetArrayVal === offsetParamVal + (NUMBER_OF_RESULTS + 20) ||
      offsetArrayVal === offsetParamVal + (NUMBER_OF_RESULTS + 40))
  );
};
// If you are viewing the second page of results, display the second, third and fourth pagination buttons.
const secondPageEtc = function (offsetArrayVal, offsetParamVal) {
  return (
    offsetParamVal === NUMBER_OF_RESULTS &&
    (offsetArrayVal === offsetParamVal ||
      offsetArrayVal === offsetParamVal + NUMBER_OF_RESULTS ||
      offsetArrayVal === offsetParamVal + (NUMBER_OF_RESULTS + 20))
  );
};
// If you are viewing any page page after page 1 or 2, or before the second to last and last pages, display
// the pagination buttons for the previous page, current page and next page of results.
const intermediatePages = function (urlParams, offsetArrayVal, offsetParamVal) {
  return (
    urlParams.get('offset') &&
    (offsetArrayVal === offsetParamVal ||
      offsetArrayVal === offsetParamVal - NUMBER_OF_RESULTS ||
      offsetArrayVal === offsetParamVal + NUMBER_OF_RESULTS)
  );
};
// If you are viewing the second-to-last page of results, display the second-to-last, third-to-last and fourth-to-last pagination buttons.
const secondToLastPage = function (offsetArrayVal, offsetParamVal, resultsArray) {
  return (
    offsetParamVal === resultsArray[resultsArray.length - 2] &&
    (offsetArrayVal === offsetParamVal ||
      offsetArrayVal === offsetParamVal - NUMBER_OF_RESULTS ||
      offsetArrayVal === offsetParamVal - (NUMBER_OF_RESULTS + 20))
  );
};
// If you are viewing the last page of results, display the last four pagination buttons.
const lastPage = function (offsetArrayVal, offsetParamVal, resultsArray) {
  return (
    offsetParamVal === resultsArray[resultsArray.length - 1] &&
    (offsetArrayVal === offsetParamVal - NUMBER_OF_RESULTS ||
      offsetArrayVal === offsetParamVal - (NUMBER_OF_RESULTS + 20) ||
      offsetArrayVal === offsetParamVal - (NUMBER_OF_RESULTS + 40))
  );
};
// Export public methods:
export { firstPage, secondPageEtc, intermediatePages, secondToLastPage, lastPage };
