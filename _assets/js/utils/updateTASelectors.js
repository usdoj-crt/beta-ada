export default function renderSelector(selector, state) {
    if (selector.includes('title')) {
        document.getElementById(selector).checked = state[selector];
    } else {
        document.getElementById(selector).value = state[selector];
    }
}