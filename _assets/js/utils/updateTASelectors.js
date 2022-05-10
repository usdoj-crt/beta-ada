export default function renderSelector(selector, state) {
    document.getElementById(selector).checked = state[selector];
    document.getElementById(selector).value = state[selector];
}