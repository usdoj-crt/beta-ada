export default function toggleVisibility(state) {
  const elements = Array.from(document.querySelectorAll('li.visibilityTarget'));
  elements.forEach((element) => {
    if (state.length === 0) {
      element.style.display='block';
    }
    else {
      element.style.display='block';
      const tagList = element.dataset.tags;
      state.forEach(tag => {
        if (!tagList.includes(tag)) {
          element.style.display = 'none';
        }
      })
    }
  });
}
