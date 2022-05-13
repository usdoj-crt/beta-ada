import { replaceState } from '../../utils/replaceHistory';
import renderSelector from '../../utils/updateTASelectors';
import toggleVisibility from "../../utils/toggleVisibility";

export default function badgeLogic(node, state, tagContainer, tag, value) {
  if ((state[value] !== '' || state[value] === true) && !document.getElementById(tag)) {
    node.appendChild(tagContainer);
    document.querySelector(`#${tag} button`).addEventListener('click', function (event) {
      if (typeof state[value] === 'string') {
        state[value] = '';
      } else {
        state[value] = false;
      }
      replaceState(
        state,
        'updatedState',
        `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`
      );
      renderSelector(value, state);
      document.getElementById(tag).remove();
      toggleVisibility(state);
    });
  } else if (
    typeof state[value] === 'string' &&
    state[value] !== '' &&
    document.getElementById(tag)
  ) {
    document.getElementById(tag).remove();
    node.appendChild(tagContainer);
    document.querySelector(`#${tag} button`).addEventListener('click', function (event) {
      if (typeof state[value] === 'string') {
        state[value] = '';
      } else {
        state[value] = false;
      }
      replaceState(
        state,
        'updatedState',
        `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`
      );
      renderSelector(value, state);
      document.getElementById(tag).remove();
      toggleVisibility(state);
    });
  } else if ((state[value] === false && document.getElementById(tag)) || (typeof state[value] === 'string' && state[value] === "" && document.getElementById(tag)) ) {
    document.getElementById(tag).remove();
    toggleVisibility(state);
  }
}
