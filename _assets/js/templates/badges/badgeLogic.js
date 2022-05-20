import { replaceState } from '../../utils/replaceHistory';
import renderSelector from '../../utils/updateTASelectors';
import toggleVisibility from '../../utils/toggleVisibility';
import totalResults from '../search/totalResultsTemplate';

export default function badgeLogic(node, state, tagContainer, tag, value, categoryArray) {
  console.log(tagContainer);
  console.log(tag);
  console.log(categoryArray);
  // Handles checkboxes:
  if (state[value] === true && !document.getElementById(tag)) {
    node.appendChild(tagContainer);
    document.querySelector(`#${tag} button`).addEventListener('click', function (event) {
      state[value] = false;
      replaceState(
        state,
        'updatedState',
        `/resources/?org=title-ii=${state['title-ii']};title-iii=${
          state['title-iii']
        };category=${categoryArray.join(',')}`
      );
      renderSelector(value, state);
      document.getElementById(tag).remove();
      document.getElementById('resultsListTarget').innerHTML = totalResults(
        toggleVisibility(state),
        'item'
      );
    });
    // Handles combobox:
  } else {
    for (const item in tagContainer){
      console.log(tagContainer[item]);
    }
  }




  // } else if (
  //   typeof state[value] === 'string' &&
  //   state[value] !== '' &&
  //   document.getElementById(tag)
  // ) {
  //   document.getElementById(tag).remove();
  //   node.appendChild(tagContainer);
  //   document.querySelector(`#${tag} button`).addEventListener('click', function (event) {
  //     if (typeof state[value] === 'string') {
  //       state[value] = '';
  //     } else {
  //       state[value] = false;
  //     }
  //     replaceState(
  //       state,
  //       'updatedState',
  //       `/resources/?org=title-ii=${state['title-ii']};title-iii=${state['title-iii']};category=${state['category']}`
  //     );
  //     renderSelector(value, state);
  //     document.getElementById(tag).remove();
  //     document.getElementById('resultsListTarget').innerHTML = totalResults(
  //       toggleVisibility(state),
  //       'item'
  //     );
  //   });
  // } else if (
  //   (state[value] === false && document.getElementById(tag)) ||
  //   (typeof state[value] === 'string' && state[value] === '' && document.getElementById(tag))
  // ) {
  //   document.getElementById(tag).remove();
  //   document.getElementById('resultsListTarget').innerHTML = totalResults(
  //     toggleVisibility(state),
  //     'item'
  //   );
  // }
}
