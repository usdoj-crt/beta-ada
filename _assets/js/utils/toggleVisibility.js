export default function toggleVisibility(state) {
  const elements = Array.from(document.querySelectorAll('li.visibilityTarget'));
  const visibleElements = [];
  elements.forEach((element) => {
    if (state.length === 0 && !visibleElements.includes(element)) {
      element.style.display='block';
      visibleElements.push(element);  
    }
    else {
      element.style.display='none';
      let classes = Array.from(element.classList);
      classes.forEach(item => {
        if (state.includes(item) && !visibleElements.includes(element)) {
          element.style.display = 'block';
          visibleElements.push(element);
        }
      })
    }
  });
  return visibleElements.length;
}
