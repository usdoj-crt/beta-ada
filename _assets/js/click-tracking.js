// Import our constants from constandts.js
import { CLICK_TRACKING_ENDPOINT, ACCESS_KEY, AFFILIATE, MODULE_CODE } from './utils/constants';
import { getSearchParam } from './utils/searchParamUtils';

export default function clickTracking() {
  // Get all the anchor tags that are children of b tags on the page:
  const allLinks = document.querySelectorAll('.search-result');

  // Loop through all the links and add a click event listener to each one:
  allLinks.forEach((link, index) => {
    const url = link.href;
    const query = encodeURI(getSearchParam('query'));
    const position = Number(getSearchParam('offset')) + (index + 1);
    // What we need to send to the click tracking endpoint:
    // url clicked
    // search query
    // affiliate
    // position
    // module code
    // access key
    const endpoint = `${CLICK_TRACKING_ENDPOINT}?url=${url}&affiliate=${AFFILIATE}&access_key=${ACCESS_KEY}&module_code=${MODULE_CODE}&${query}&position=${position}`;
    // When a link is clicked, send a POST request to the search endpoint:
    link.addEventListener('click', () => {
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-length': 0,
        },
      });
    });
  });
}
