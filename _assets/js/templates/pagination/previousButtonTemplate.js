export default function previousButton() {
    return `<li class="usa-pagination__item usa-pagination__arrow display-flex">
    <a
      href="javascript:void(0);"
      class="usa-pagination__link usa-pagination__previous-page"
      aria-label="Previous page"
    >
      <svg class="usa-icon" aria-hidden="true" role="img">
        <use xlink:href="/assets/img/sprite.svg#navigate_before"></use>
      </svg>

      <span class="usa-pagination__link-text">Previous Page</span>
    </a>
  </li>`
}
