export default function badge(title) {
    title = title.split('-').join(" ");
    return `
    <span class="usa-button usa-button--outline button-wrapper">
     ${title[0].toUpperCase() + title.substring(1)}
    <button class="usa-button usa-button--unstyled text-no-underline"
    ><span class="text-ink text-bold text-no-underline margin-x-2">X</span>
    <span class="usa-sr-only">Press enter to remove ${title} filter.</span>
    </button>
    </span>
    `
}