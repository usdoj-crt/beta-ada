function renderSearchResults(content, append = true) {
  var previous = document.getElementById("search-results").innerHTML;
  if (append) {
    document.getElementById("search-results").innerHTML = previous + content;
  } else {
    document.getElementById("search-results").innerHTML = content;
  }
};
