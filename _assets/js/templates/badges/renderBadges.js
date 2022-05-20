import badgeLogic from "./badgeLogic";
import badge from "./badgeTemplate";

export default function renderBages(node, state, categoryArray, parentID) {
  // Construct our list elements:
  const titleTwo = document.createElement('li');
  const titleThree = document.createElement('li');
  const catBadgeList = [];
  // Add a class to each and add an id to each:
  titleTwo.classList.add('usa-button-group__item');
  titleTwo.setAttribute('id', 'titleTwoTag');
  titleThree.classList.add('usa-button-group__item');
  titleThree.setAttribute('id', 'titleThreeTag');

  // Create the HTML templates:
  titleTwo.innerHTML =  badge('State and Local government');
  titleThree.innerHTML = badge('Businesses');
  
  // Depending on the state of the selectors, render different tags:
  if (parentID === 'title-ii') {
    badgeLogic(node, state, titleTwo, 'titleTwoTag', parentID, categoryArray)
  }
  if (parentID === 'title-iii') {
    badgeLogic(node, state, titleThree, 'titleThreeTag', parentID, categoryArray)
  }
  if (parentID === 'category') {
    for (const cat of categoryArray) {
      let categoryBadge = document.createElement('li');
      categoryBadge.classList.add('usa-button-group__item', 'categoryTag');
      categoryBadge.setAttribute('id', `${cat}`);
      categoryBadge.innerHTML = badge(cat);
      catBadgeList.push(categoryBadge);
    }
    badgeLogic(node, state, catBadgeList, 'categoryTag', parentID, categoryArray);
  }
}


