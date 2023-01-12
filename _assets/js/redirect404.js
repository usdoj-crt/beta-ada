function showNotFound() {
  document.getElementById('redirect-pending').style.display = 'none';
}

function attemptToRedirect(attemptedPath, manual, generated) {
  if (!attemptedPath.replaceAll('/', '').trim()) {
    return; // Don't even try if the path is empty
  }

  // (the path without html/htm/trailing slash)
  const cleanPath = attemptedPath.replace(/\.html?$/, '').replace(/\/+$/, '');
  const pathsToTry = [
    cleanPath,
    cleanPath + '/',
    cleanPath + '.htm',
    cleanPath + '.html',
  ]

  for (const normalizedPath of pathsToTry) {
    if (manual.hasOwnProperty(normalizedPath)) {
      window.location.replace(manual[normalizedPath]);
      return;
    }

    if (generated.hasOwnProperty(normalizedPath)) {
      window.location.replace(generated[normalizedPath]);
      return;
    }
  }

  // If we make it here, it's a real 404.
  showNotFound();
}

const gotRedirects = {};
function waitForRedirects(name, request) {
  gotRedirects[name] = JSON.parse(request.responseText);
  if (!gotRedirects.hasOwnProperty('manual')) return;
  if (!gotRedirects.hasOwnProperty('generated')) return;

  attemptToRedirect(window.location.pathname, gotRedirects['manual'], gotRedirects['generated']);
}

function requestRedirects(name, attempts) {
  if (attempts <= 0) {
    showNotFound();
    return;
  }
  const request = new XMLHttpRequest();
  function handleResponse() {
    if (this.status !== 200) {
      requestRedirects(name, attempts - 1);
      return;
    }
    waitForRedirects(name, this);
  }
  request.addEventListener('load', handleResponse);
  request.overrideMimeType('application/json');
  request.open('GET', `/${name}_redirects.json`);
  request.send();
}

const ATTEMPTS = 5;
requestRedirects('manual', ATTEMPTS);
requestRedirects('generated', ATTEMPTS);
