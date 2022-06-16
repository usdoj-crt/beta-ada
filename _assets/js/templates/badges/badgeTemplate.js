export default function badge(title) {
    const normalizedTitle = title.split('-').join(" ");
    return `
    <span class="usa-button text-normal button-wrapper">
     ${normalizedTitle[0].toUpperCase() + normalizedTitle.substring(1)}
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