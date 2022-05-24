import { replaceState } from '../../utils/replaceHistory';
import renderSelector from '../../utils/updateTASelectors';
import toggleVisibility from '../../utils/toggleVisibility';
import totalResults from '../search/totalResultsTemplate';

export default function badgeLogic(node, element, state) {
  if (!document.getElementById(element.id)) {
    node.appendChild(element);
    document.querySelector(`#${element.id} button`).addEventListener('click', function (event) {
      document.getElementById(element.id).remove();
      let value = element.id.replace('-badge', '');
      let index = state.indexOf(value);
      let listItems = document.querySelectorAll('.usa-combo-box__list-option');
      listItems.forEach((item) => {
        if (value === item.dataset.value) {
          item.setAttribute('aria-selected', 'false');
          item.setAttribute('tabindex', '-1');
          item.classList.remove('usa-combo-box__list-option--selected');
        }
      });
      state.splice(index, 1);
      replaceState(state, 'updatedState', `/resources/?filters=${state.join(';')}`);
      renderSelector(element, state);
      document.getElementById('resultsListTarget').innerHTML = totalResults(
        toggleVisibility(state),
        'item'
      );
    });
  }
}
