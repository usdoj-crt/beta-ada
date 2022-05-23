import badgeLogic from './badgeLogic';
import badge from './badgeTemplate';

export default function renderBages(node, state) {
  for (const item in state) {
    let tagBadge = document.createElement('li');
    tagBadge.classList.add('usa-button-group__item', 'categoryTag');
    tagBadge.setAttribute('id', `${state[item]}-badge`);
    tagBadge.innerHTML = badge(state[item]);
    badgeLogic(node, tagBadge, state);
  }
}
