import badgeLogic from "./badgeLogic";
import badge from "./badgeTemplate";

export default function renderBages(node, state, parentID) {
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
  titleTwo.innerHTML =  badge('State and Local government');
  titleThree.innerHTML = badge('Businesses');
  category.innerHTML = badge(state.category);
  
  // Depending on the state of the selectors, render different tags:
  if (parentID === 'title-ii') {
    badgeLogic(node, state, titleTwo, 'titleTwoTag', parentID)
  }
  if (parentID === 'title-iii') {
    badgeLogic(node, state, titleThree, 'titleThreeTag', parentID)
  }
  if (parentID === 'category') {
    badgeLogic(node, state, category, 'categoryTag', parentID);
  }
}


