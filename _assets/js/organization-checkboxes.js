import { pushStateToURL, replaceState } from './utils/replaceHistory';
import { getSearchParam, setSearchParam } from './utils/searchParamUtils';

// Get our checkboxes:
const checkboxes = document.getElementsByClassName('usa-checkbox__input');
const searchParams = new URLSearchParams(window.location.search);

const updateState = (e) => {
  let allParams = searchParams.getAll('org');
  replaceState(
    e.target.value,
    'checked',
    `/resources?org=${allParams}`
  );
};

const deleteParam = (e) => {
    let allParams = searchParams.getAll('org');
    console.log(allParams);
    const remove = allParams.indexOf(e.target.value);
    if (remove > -1) {
        allParams.splice(remove, 1)
    };
    console.log(allParams);
    replaceState(
        e.target.value,
        'checked',
        `/resources?org=${allParams}`
      );
}

Array.from(checkboxes).forEach((checkbox) => {
  checkbox.addEventListener('change', (event) => {
    if (getSearchParam('org') === '' && event.target.checked) {
      replaceState(event.target.value, 'initial', `/resources?org=${event.target.value}`);
    }
    console.log(searchParams.getAll('org'));
    // If checked, add target value to url
    if (getSearchParam('org') !== '' && event.target.checked) {
      searchParams.append('org', event.target.value);
      updateState(event);
    }
    // If unchecked remove target value from url
    if (getSearchParam('org') !== '' && !event.target.checked) {
      deleteParam(event);
    }
  });
});
