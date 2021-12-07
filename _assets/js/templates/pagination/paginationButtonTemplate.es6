//= require ../../utils/offsetUtils.js

const paginationButton = (offsetVal, index, resultsArr) => {
  return `<li class="usa-pagination__item usa-pagination__page-no">
      <a
        href="?${offsetUtils.setOffsetParam(offsetVal)}"
        class="usa-pagination__button"
        aria-label="${offsetVal === resultsArr[resultsArr.length - 1] ? "Page " + (index + 1) +  " - Last page" : "Page " + (index + 1)}"
        data-offset= ${offsetVal}
      >
        ${index + 1}
      </a>
    </li>`;
};
