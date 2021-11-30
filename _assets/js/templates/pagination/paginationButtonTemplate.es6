const paginationButton = (offsetVal, index) => {
  return `<li class="usa-pagination__item usa-pagination__page-no">
      <a
        href="?${setOffsetParam(offsetVal)}"
        class="usa-pagination__button"
        aria-label="Page ${index + 1}"
        data-offset= ${offsetVal}
      >
        ${index + 1}
      </a>
    </li>`;
};
