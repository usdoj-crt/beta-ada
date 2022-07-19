var queryString = window.location.search;

if (queryString) {
  var input = document.getElementById("query");
  var params = new URLSearchParams(queryString.substring(1));
  var value = params.get("query");
  console.log(value);

  if (value) input.value = value;
}
