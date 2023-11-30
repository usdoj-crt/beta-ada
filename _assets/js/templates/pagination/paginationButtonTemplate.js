//= require ../../utils/offsetUtils.js
import {getSearchParam, setSearchParam} from "../../utils/searchParamUtils";

export default function paginationButton(offsetVal, index, resultsArr) {
  const currentOffset = getSearchParam('offset');
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
  return `<li class="usa-pagination__item usa-pagination__page-no display-none tablet:display-block">
      <a
        href="?${setSearchParam('offset', offsetVal)}"
        class="usa-pagination__button bg-primary-darker"
        aria-label="${ariaLabel}""
        aria-current=${ariaCurrent}
        data-offset=${offsetVal}
      >
        ${index + 1}
      </a>
    </li>`;
};
