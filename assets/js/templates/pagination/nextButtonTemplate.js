export default function nextButton() {
  return `<li class="usa-pagination__item usa-pagination__arrow display-flex">
          <a
            href="javascript:void(0);"
            class="usa-pagination__link usa-pagination__next-page"
            aria-label="Next page"
          >
            <span class="usa-pagination__link-text"> Next Page </span>

            <svg class="usa-icon" aria-hidden="true" role="img">
              <use xlink:href="/assets/images/uswds/sprite.svg#navigate_next"></use>
            </svg>
          </a>
          </li>`;
}
