let paginationLogic = (function () {
  // If you are viewing the first page of results,
  // display the first, second, third and fourth pagination
  // buttons.
  const firstPage = (offsetArrayVal, offsetParamVal) => {
    return (
      offsetParamVal === 0 &&
      (offsetArrayVal === offsetParamVal + 20 ||
        offsetArrayVal === offsetParamVal + 40 ||
        offsetArrayVal === offsetParamVal + 60)
    );
  };
  // If you are viewing the second page of results, display the second, third and fourth pagination buttons.
  const secondPageEtc = (offsetArrayVal, offsetParamVal) => {
    return offsetParamVal === 20 &&
    (offsetArrayVal === offsetParamVal ||
      offsetArrayVal === offsetParamVal + 20 ||
      offsetArrayVal === offsetParamVal + 40)
  }
  // If you are viewing any page page after page 1 or 2, or before the second to last and last pages, display 
  // the pagination buttons for the previous page, current page and next page of results.
  const intermediatePages = (urlParams, offsetArrayVal, offsetParamVal) => {
    return (
      urlParams.get("offset") &&
      (offsetArrayVal === offsetParamVal ||
        offsetArrayVal === offsetParamVal - 20 ||
        offsetArrayVal === offsetParamVal + 20)
    );
  };
  // If you are viewing the second-to-last page of results, display the second-to-last, third-to-last and fourth-to-last pagination buttons.
  const secondToLastPage = (offsetArrayVal, offsetParamVal, resultsArray) => {
    return offsetParamVal === resultsArray[resultsArray.length - 2] &&
    (offsetArrayVal === offsetParamVal ||
      offsetArrayVal === offsetParamVal - 20 ||
      offsetArrayVal === offsetParamVal - 40)
  }
  // If you are viewing the last page of results, display the last four pagination buttons.
  const lastPage = (offsetArrayVal, offsetParamVal, resultsArray) => {
    return (
      offsetParamVal === resultsArray[resultsArray.length - 1] &&
      (offsetArrayVal === offsetParamVal - 20 ||
        offsetArrayVal === offsetParamVal - 40 ||
        offsetArrayVal === offsetParamVal - 60)
    );
  };
  // Export public methods:
  return {firstPage, secondPageEtc, intermediatePages, secondToLastPage, lastPage}
})();
