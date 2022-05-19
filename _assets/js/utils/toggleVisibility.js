export default function toggleVisibility(state) {
  const elements = Array.from(document.querySelectorAll('li.visibilityTarget'));
  const visibleElements = [];
  const titleTwo = state['title-ii'];
  const titleThree = state['title-iii'];
  const category = state['category'];
  elements.forEach((element) => {
    if (titleTwo === false && titleThree === false && category === '') {
      element.style.display = 'block';
      visibleElements.push(element);
    } else if (titleTwo === true && titleThree === false && category === '') {
      if (Array.from(element.classList).includes('title-ii')) {
        element.style.display = 'block';
        visibleElements.push(element);
      } else {
        element.style.display = 'none';
      }
    } else if (titleTwo === false && titleThree === true && category === '') {
      if (Array.from(element.classList).includes('title-iii')) {
        element.style.display = 'block';
        visibleElements.push(element);
      } else {
        element.style.display = 'none';
      }
    } else if (titleTwo === false && titleThree === false && category !== '') {
      if (Array.from(element.classList).includes(category)) {
        element.style.display = 'block';
        visibleElements.push(element);
      } else {
        element.style.display = 'none';
      }
    } else if (titleTwo === true && titleThree === true && category === '') {
      if (
        Array.from(element.classList).includes('title-ii') ||
        Array.from(element.classList).includes('title-iii')
      ) {
        element.style.display = 'block';
        visibleElements.push(element);
      } else {
        element.style.display = 'none';
      }
    } else if (titleTwo === true && titleThree === false && category !== '') {
      if (
        Array.from(element.classList).includes('title-ii') ||
        Array.from(element.classList).includes(category)
      ) {
        element.style.display = 'block';
        visibleElements.push(element);
      } else {
        element.style.display = 'none';
      }
    } else if (titleTwo === false && titleThree === true && category !== '') {
      if (
        Array.from(element.classList).includes('title-iii') ||
        Array.from(element.classList).includes(category)
      ) {
        element.style.display = 'block';
        visibleElements.push(element);
      } else {
        element.style.display = 'none';
      }
    } else if (titleTwo === true && titleThree === true && category !== '') {
      if (
        Array.from(element.classList).includes('title-ii') ||
        Array.from(element.classList).includes('title-iii') ||
        Array.from(element.classList).includes(category)
      ) {
        element.style.display = 'block';
        visibleElements.push(element);
      } else {
        element.style.display = 'none';
      }
    }
});
return visibleElements.length;
}
