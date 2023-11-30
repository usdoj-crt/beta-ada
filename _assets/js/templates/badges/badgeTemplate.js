export default function badge(title) {
    const normalizedTitle = title === 'covid-19' ? title.toUpperCase() : title.split('-').join(" ")[0].toUpperCase() + title.split('-').join(" ").substring(1);
    return `
    <span class="usa-button text-normal button-wrapper">
     ${normalizedTitle}
    <button class="usa-button usa-button--unstyled text-no-underline"
    >
    <span class="margin-left-05 flex-align-center"><svg fill='#162e51' aria-hidden="true" role="img">
    <use xlink:href="/assets/img/sprite.svg#close"></use>
        </svg></span>
    <span class="usa-sr-only">Press enter to remove ${normalizedTitle} filter.</span>
    </button>
    </span>
    `
}