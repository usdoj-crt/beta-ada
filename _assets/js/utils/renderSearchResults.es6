const renderSearchResults = (content, append = true) => {
  const previous = document.getElementById("search-results").innerHTML;
  document.getElementById("search-results").innerHTML =
    append === true ? previous + content : content;
};
