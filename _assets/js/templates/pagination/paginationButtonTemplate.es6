//= require ../../utils/offsetUtils.js

const paginationButton = (offsetVal, index, resultsArr) => {
  let currentOffset = offsetUtils.getOffsetParam();
  let ariaLabel = "";
  let ariaCurrent = "false";
  if (
    currentOffset !== offsetVal &&
    offsetVal === resultsArr[resultsArr.length - 1]
  ) {
    ariaLabel = "Last page; Page " + (index + 1);
  } else if (currentOffset !== offsetVal) {
    ariaLabel = "Page " + (index + 1);
  }
  if (currentOffset === offsetVal) {
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
