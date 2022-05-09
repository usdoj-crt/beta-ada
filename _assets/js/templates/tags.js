export default function tags(node, state) {
  // Construct our list elements:
  const titleTwo = document.createElement('li');
  const titleThree = document.createElement('li');
  const category = document.createElement('li');
  // Add a class to each and add an id to each:
  titleTwo.classList.add('usa-button-group__item');
  titleTwo.setAttribute('id', 'titleTwoTag');
  titleThree.classList.add('usa-button-group__item');
  titleThree.setAttribute('id', 'titleThreeTag');
  category.classList.add('usa-button-group__item');
  category.setAttribute('id', 'categoryTag');

  // Create the HTML templates:
  const titleTwoHTML = `<a href="javascript:void(0);" class="usa-button usa-button--outline"
      >Title II</a>`;
  const titleThreeHTML = `<a href="javascript:void(0);" class="usa-button usa-button--outline"
    >Title III</a>`;
  const categoryHTML = `<a href="javascript:void(0);" class="usa-button usa-button--outline"
    >${state.category}</a>`;
  titleTwo.innerHTML = titleTwoHTML;
  titleThree.innerHTML = titleThreeHTML;
  category.innerHTML = categoryHTML;
  if (state['title-ii'] === true && !document.getElementById('titleTwoTag')) {
    node.appendChild(titleTwo);
  } else if (state['title-ii'] === false && document.getElementById('titleTwoTag')) {
    document.getElementById('titleTwoTag').remove();
  }
  if (state['title-iii'] === true && !document.getElementById('titleThreeTag')) {
    node.appendChild(titleThree);
  } else if (state['title-iii'] === false && document.getElementById('titleThreeTag')) {
    document.getElementById('titleThreeTag').remove();
  }
  if (state.category !== '' && !document.getElementById('categoryTag')) {
    node.appendChild(category);
  } else if (state.category !== '' && document.getElementById('categoryTag')) {
    document.getElementById('categoryTag').remove();
    node.appendChild(category);
  } else if (state.category === '' && document.getElementById('categoryTag')) {
    document.getElementById('categoryTag').remove();
  }
}
