// Imports:
//= require ../utils/getOffsetParam.js
//= require ../utils/setOffsetParam.js
//= require ./nextButtonTemplate.js
//= require ./previousButtonTemplate.js
//= require ./ellipsisTemplate.js
//= require ./paginationButtonTemplate.js

const paginationTemplate = (resultsArr, urlParams) => {
  let offsetInt = parseInt(urlParams.get("offset"));
  if (resultsArr.length <= 5) {
    return `
        ${previousButton()}
        ${resultsArr
          .map(function (offsetValue, index) {
            paginationButton(offsetValue, index);
          })
          .join(" ")}
        ${nextButton()}`;
  } else {
    return `
        ${previousButton()}
        ${paginationButton(resultsArr[0], 0)}
        ${offsetInt === 0 || offsetInt === 20 || offsetInt === 40 ? '' : ellipsis()}
        ${resultsArr
          .map(function (offsetValue, index) {
            // If it is either the first page or last page, render nothing. The first and last page buttons are fixed.
            if (
              index === 0 ||
              index === resultsArr.indexOf(resultsArr[resultsArr.length - 1])
            ) {
              return;
              // If you are on the first page, render the next three page buttons.
            } else if (
              offsetInt === 0 &&
              (offsetValue === offsetInt + 20 ||
                offsetValue === offsetInt + 40 ||
                offsetValue === offsetInt + 60)
            ) {
              return paginationButton(offsetValue, index);
              // If you are on the second page, render the second page button, third page button and fourth page button:
            } else if (
              offsetInt === 20 &&
              (offsetValue === offsetInt ||
                offsetValue === offsetInt + 20 ||
                offsetValue === offsetInt + 40)
            ) {
              return paginationButton(offsetValue, index);
              // If you are on the second to last page, render that page button and the previous two page buttons.
            } else if (
              offsetInt === resultsArr[resultsArr.length - 2] &&
              (offsetValue === offsetInt ||
                offsetValue === offsetInt - 20 ||
                offsetValue === offsetInt - 40)
            ) {
              return paginationButton(offsetValue, index);
              // If you are on the last page, render the previous 3 page buttons.
            } else if (
              offsetInt === resultsArr[resultsArr.length - 1] &&
              (offsetValue === offsetInt - 20 ||
                offsetValue === offsetInt - 40 ||
                offsetValue === offsetInt - 60)
            ) {
              return paginationButton(offsetValue, index);
              // If you are on any other page, render that page button, the previous page button and the next page button.
            } else if (
              urlParams.get("offset") &&
              (offsetValue === offsetInt ||
                offsetValue === offsetInt - 20 ||
                offsetValue === offsetInt + 20)
            ) {
              return paginationButton(offsetValue, index);
            }
          })
          .join(" ")}
        ${offsetInt === resultsArr[resultsArr.length - 1] || offsetInt === resultsArr[resultsArr.length - 2] || offsetInt === resultsArr[resultsArr.length - 3]  ? '' : ellipsis()}
        ${paginationButton(resultsArr[resultsArr.length - 1], resultsArr.indexOf(resultsArr[resultsArr.length - 1]))}
        ${nextButton()}`;
  }
};
