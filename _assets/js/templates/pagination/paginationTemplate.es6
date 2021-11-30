// Imports:
//= require ../../utils/getOffsetParam.js
//= require ../../utils/setOffsetParam.js
//= require ./nextButtonTemplate.js
//= require ./previousButtonTemplate.js
//= require ./ellipsisTemplate.js
//= require ./paginationButtonTemplate.js
//= require ../../utils/paginationLogic/firstPage.js
//= require ../../utils/paginationLogic/secondPageEtc.js
//= require ../../utils/paginationLogic/intermediatePages.js
//= require ../../utils/paginationLogic/secondToLastPage.js
//= require ../../utils/paginationLogic/lastPage.js

const paginationTemplate = (resultsArr, urlParams) => {
  const offsetInt = parseInt(urlParams.get("offset"));
  if (resultsArr.length <= 5) {
    return `
        ${previousButton()}
        ${resultsArr
          .map((offsetValue, index) => {
            return paginationButton(offsetValue, index);
          })
          .join(" ")}
        ${nextButton()}`;
  } else {
    return `
        ${previousButton()}
        ${paginationButton(resultsArr[0], 0)}
        ${
          offsetInt === 0 || offsetInt === 20 || offsetInt === 40
            ? ""
            : ellipsis()
        }
        ${resultsArr
          .map((offsetValue, index) => {
            // If it is either the first page or last page, render nothing. The first and last page buttons are fixed.
            if (
              index === 0 ||
              index === resultsArr.indexOf(resultsArr[resultsArr.length - 1])
            ) {
              // If you are on the first page, render the next three page buttons.
            } else if (firstPage(offsetValue, offsetInt)) {
              return paginationButton(offsetValue, index);
              // If you are on the second page, render the second page button, third page button and fourth page button:
            } else if (secondPageEtc(offsetValue, offsetInt)) {
              return paginationButton(offsetValue, index);
              // If you are on the second to last page, render that page button and the previous two page buttons.
            } else if (secondToLastPage(offsetValue, offsetInt, resultsArr)) {
              return paginationButton(offsetValue, index);
              // If you are on the last page, render the previous 3 page buttons.
            } else if (lastPage(offsetValue, offsetInt, resultsArr)) {
              return paginationButton(offsetValue, index);
              // If you are on any other page, render that page button, the previous page button and the next page button.
            } else if (intermediatePages(urlParams, offsetValue, offsetInt)) {
              return paginationButton(offsetValue, index);
            }
          })
          .join(" ")}
        ${
          offsetInt === resultsArr[resultsArr.length - 1] ||
          offsetInt === resultsArr[resultsArr.length - 2] ||
          offsetInt === resultsArr[resultsArr.length - 3]
            ? ""
            : ellipsis()
        }
        ${paginationButton(
          resultsArr[resultsArr.length - 1],
          resultsArr.indexOf(resultsArr[resultsArr.length - 1])
        )}
        ${nextButton()}`;
  }
};
