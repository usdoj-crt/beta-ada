import { replaceState } from '../replaceHistory';
import renderBadges from '../../templates/badges/renderBadges';
import toggleVisibility from './toggleVisibility';
import totalResults from '../../templates/search/totalResultsTemplate';

// Update badges and update the url:
export default function updateDOMandURL(state) {
  // Clean up state:
  replaceState(state, 'updatedState', `/resources/?filters=${state.join(';')}`);
  renderBadges(state);
  document.getElementById('resultsListTarget').innerHTML = totalResults(
    toggleVisibility(state),
    'item'
  );
};