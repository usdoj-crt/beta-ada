import { replaceState } from "../utils/replaceHistory";
import renderSelector from "../utils/updateTASelectors";

export default function renderTags(node, state) {
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
  const titleTwoHTML = `<button class="usa-button usa-button--outline"
      >Title II <span class="text-ink">X</span></button>`;
  const titleThreeHTML = `<button class="usa-button usa-button--outline"
    >Title III <span class="text-ink">X</span></button>`;
  const categoryHTML = `<button class="usa-button usa-button--outline"
    >${state.category} <span class="text-ink">X</span></button>`;
  titleTwo.innerHTML = titleTwoHTML;
  titleThree.innerHTML = titleThreeHTML;
  category.innerHTML = categoryHTML;

  // Depending on the state of the selectors, render different tags:
  if (state['title-ii'] === true && !document.getElementById('titleTwoTag')) {
    node.appendChild(titleTwo);
    document.querySelector("#titleTwoTag button").addEventListener('click', function(event) {
      state['title-ii'] = false;
      replaceState(state, 'updatedState', `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`)
      renderSelector('title-ii', state);
      document.getElementById('titleTwoTag').remove();
    })
  } else if (state['title-ii'] === false && document.getElementById('titleTwoTag')) {
    document.getElementById('titleTwoTag').remove();
  }
  if (state['title-iii'] === true && !document.getElementById('titleThreeTag')) {
    node.appendChild(titleThree);
    document.querySelector("#titleThreeTag button").addEventListener('click', function(event) {
      state['title-iii'] = false;
      replaceState(state, 'updatedState', `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`)
      renderSelector('title-iii', state);
      document.getElementById('titleThreeTag').remove();
    })
  } else if (state['title-iii'] === false && document.getElementById('titleThreeTag')) {
    document.getElementById('titleThreeTag').remove();
  }
  if (state.category !== '' && !document.getElementById('categoryTag')) {
    node.appendChild(category);
    document.querySelector("#categoryTag button").addEventListener('click', function(event) {
      state['category'] = "";
      replaceState(state, 'updatedState', `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`)
      renderSelector('category', state)
      document.getElementById('categoryTag').remove();
    })
  } else if (state.category !== '' && document.getElementById('categoryTag')) {
    document.getElementById('categoryTag').remove();
    node.appendChild(category);
    document.querySelector("#categoryTag button").addEventListener('click', function(event) {
      state['category'] = "";
      replaceState(state, 'updatedState', `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`)
      renderSelector('category', state)
      document.getElementById('categoryTag').remove();
    })
  } else if (state.category === '' && document.getElementById('categoryTag')) {
    document.getElementById('categoryTag').remove();
  }
}


