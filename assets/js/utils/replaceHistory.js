function pushStateToURL(state, title = null, url = null) {
  history.pushState(state, title, url);
}

function replaceState(state, title = null, url = null) {
  history.replaceState(state, title, url);
}

export { pushStateToURL, replaceState };
