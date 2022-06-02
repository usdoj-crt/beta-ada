export default function toggleSelectorState(selector) {
  let id = selector.id.replace('-badge', '');
  const element = document.getElementById(id);
  // Update the check box state
  if (element.dataset.checked === 'true') {
    element.checked = false;
    element.dataset.checked = false;
  } else if (element.dataset.checked === 'false') {
    element.checked = true;
    element.dataset.checked = true;
  }
}
