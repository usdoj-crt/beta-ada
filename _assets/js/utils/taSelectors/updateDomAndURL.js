import { replaceState } from '../replaceHistory';
import renderBadges from '../../templates/badges/renderBadges';
import toggleVisibility from './toggleVisibility';
import totalResults from '../../templates/search/totalResultsTemplate';
import { setStorage } from '../getSetlocalStorage';

// Update badges and update the url:
export default function updateDOMandURL(state) {
  // Set state in the browser history - which will cover us for users without Local Storage in place
  replaceState(state, 'updatedState', `/resources/?filters=${state.join(';')}`);
  // Set state in local storage
  setStorage('filters', state.join(';'));
  renderBadges(state);
  document.getElementById('resultsListTarget').innerHTML = totalResults(
    toggleVisibility(state),
    'item'
  );
};