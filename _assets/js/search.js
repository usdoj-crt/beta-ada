const search = () => {
  const queryString = window.location.search;

  if (queryString) {
    const input = document.getElementById('query');
    const params = new URLSearchParams(queryString.substring(1));
    const value = params.get('query');

    if (value) input.value = value;
  }
};

search();
