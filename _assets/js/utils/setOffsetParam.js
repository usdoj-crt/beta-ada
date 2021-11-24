// Get the url params offset value and convert it to a string. This is used to set the href link for each pagination button.
const setOffsetParam = (offsetValue) => {
    let searchParams = new URLSearchParams(window.location.search);
    searchParams.set("offset", offsetValue);
    return searchParams.toString();
  };