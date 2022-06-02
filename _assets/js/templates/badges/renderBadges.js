import badgeLogic from './badgeLogic';
import badge from './badgeTemplate';

export default function renderBages(state) {
  for (const item in state) {
    let tagBadge = document.createElement('li');
    tagBadge.classList.add('usa-button-group__item', 'categoryTag');
    tagBadge.setAttribute('id', `${state[item]}-badge`);
    if (state[item]=== 'title-ii') {
      tagBadge.innerHTML = badge('State and local government');
    } else if (state[item]==='title-iii') {
      tagBadge.innerHTML = badge('Businesses');
    } else {
      tagBadge.innerHTML = badge(state[item]);
    }
    badgeLogic(tagBadge, state);
  }
}
