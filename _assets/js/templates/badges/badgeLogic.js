import { replaceState } from '../../utils/replaceHistory';
import toggleSelectorState from '../../utils/taSelectors/updateTASelectors';
import toggleVisibility from '../../utils/taSelectors/toggleVisibility';
import totalResults from '../search/totalResultsTemplate';

export default function badgeLogic(element, state) {
  // Get our unordered list to put badges in:
  const badgeList = document.querySelector('#selector-badges ul');
  if (!document.getElementById(element.id)) {
    badgeList.appendChild(element);
    document.querySelector(`#${element.id} button`).addEventListener('click', function () {
      document.getElementById(element.id).remove();
      const value = element.id.replace('-badge', '');
      const index = state.indexOf(value);
      state.splice(index, 1);
      replaceState(state, 'updatedState', `/resources/?filters=${state.join(';')}`);
      toggleSelectorState(element, state);
      document.getElementById('resultsListTarget').innerHTML = totalResults(
        toggleVisibility(state),
        'item'
      );
    });
  }
}
