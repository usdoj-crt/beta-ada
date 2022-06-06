export default function badge(title) {
    const normalizedTitle = title.split('-').join(" ");
    return `
    <span class="usa-button usa-button--outline button-wrapper">
     ${normalizedTitle[0].toUpperCase() + normalizedTitle.substring(1)}
    <button class="usa-button usa-button--unstyled text-no-underline"
    ><span class="text-ink text-bold text-no-underline margin-left-1">X</span>
    <span class="usa-sr-only">Press enter to remove ${normalizedTitle} filter.</span>
    </button>
    </span>
    `
}