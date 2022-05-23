export default function toggleVisibility(state) {
  const elements = Array.from(document.querySelectorAll('li.visibilityTarget'));
  const visibleElements = [];
  elements.forEach((element) => {
    element.style.display='none';
    if (Array.from(element.classList).includes(state)) {
      element.style.display='block';
    }
  });
  console.log(visibleElements);
  return visibleElements.length;
}
