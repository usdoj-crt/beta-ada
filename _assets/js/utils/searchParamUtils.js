// Get the current offset value:
function getSearchParam(param, paramString=null) {
    const searchParams = new URLSearchParams(window.location.search || paramString);
    const query = searchParams.get(param);
    if (query !== null) {
      return query;
    } else {
      return '';
    }
  }
  // Get the url params offset value and convert it to a string. This is used to set the href link for each pagination button.
  function setSearchParam(param, value, paramString=null) {
    const searchParams = new URLSearchParams(window.location.search || paramString);
    searchParams.set(param, value);
    return searchParams.toString();
  }
  
  // Export our public methods:
  export { getSearchParam, setSearchParam };
  