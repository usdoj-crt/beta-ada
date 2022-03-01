// Get the current offset value:
function getOffsetParam() {
  var searchParams = new URLSearchParams(window.location.search);
  var offset = searchParams.get('offset');
  if (offset !== null) {
    return offset;
  } else {
    return '';
  }
}
// Get the url params offset value and convert it to a string. This is used to set the href link for each pagination button.
function setOffsetParam(offsetValue) {
  let searchParams = new URLSearchParams(window.location.search);
  searchParams.set('offset', offsetValue);
  return searchParams.toString();
}

// Export our public methods:
export { getOffsetParam, setOffsetParam };
