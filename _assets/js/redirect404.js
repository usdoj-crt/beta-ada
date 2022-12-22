import manual from "./manual_redirects.js";
import generated from "./generated_redirects.js";

function attemptToRedirect(attemptedPath) {
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
  document.getElementById('redirect-pending').style.display = 'none';
  document.getElementById('redirect-failed').style.display = 'unset';
}

attemptToRedirect(window.location.pathname);
