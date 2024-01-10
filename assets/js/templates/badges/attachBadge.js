import { replaceState } from '../../utils/replaceHistory';
import toggleSelectorState from '../../utils/taSelectors/updateTASelectors';
import toggleVisibility from '../../utils/taSelectors/toggleVisibility';
import totalResults from '../search/totalResultsTemplate';
import { setStorage } from '../../utils/getSetlocalStorage';
import countVisibleArticles from '../../utils/taSelectors/countVisibleArticles';

export default function attachBadge(element, state) {
  // Get our unordered list to put badges in:
  const badgeList = document.querySelector('#selector-badges ul');
  if (!document.getElementById(element.id)) {
    badgeList.appendChild(element);
    if (document.querySelector(`#${element.id} button`)) {
      document.querySelector(`#${element.id} button`).addEventListener('click', function () {
        document.getElementById(element.id).remove();
        const value = element.id.replace('-badge', '');
        const index = state.indexOf(value);
        state.splice(index, 1);
        replaceState(state, 'updatedState', `/resources/?filters=${state.join(';')}`);
        setStorage('filters', state.join(';'));
        toggleSelectorState(element, state);
        toggleVisibility(state);
        document.getElementById('resultsListTarget').innerHTML = totalResults(
          countVisibleArticles(),
          'item'
        );
      });
    }
  }
}
