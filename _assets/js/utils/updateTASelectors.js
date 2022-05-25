export default function renderSelector(selector, state) {
  let id = selector.id.replace('-badge', '');
  // Update the check box state
  if (document.getElementById(id).dataset.checked === 'true') {
    document.getElementById(id).checked = false;
    document.getElementById(id).dataset.checked = false;
  } else if (document.getElementById(id).dataset.checked === 'false') {
    document.getElementById(id).checked = true;
    document.getElementById(id).dataset.checked = true;
  }
}
