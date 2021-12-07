//= require ../../utils/offsetUtils.js

const paginationButton = (offsetVal, index, resultsArr) => {
  let currOffset = offsetUtils.getOffsetParam();
  let ariaLabel = "";
  let ariaCurrent = "false";
  if (
    currOffset !== offsetVal &&
    offsetVal === resultsArr[resultsArr.length - 1]
  ) {
    ariaLabel = "Page " + (index + 1) + " - Last page";
  } else if (currOffset !== offsetVal) {
    ariaLabel = "Page " + (index + 1);
  }
  if (currOffset === offsetVal) {
    ariaCurrent = "true";
  }
  return `<li class="usa-pagination__item usa-pagination__page-no">
      <a
        href="?${offsetUtils.setOffsetParam(offsetVal)}"
        class="usa-pagination__button"
        aria-label="${ariaLabel}""
        aria-current=${ariaCurrent}
        data-offset= ${offsetVal}
      >
        ${index + 1}
      </a>
    </li>`;
};
