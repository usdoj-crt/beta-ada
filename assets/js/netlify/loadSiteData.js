/** Modifies window.jekyllSite to contain site data from a few sources. */
export default async function loadSiteData() {
  const response = await fetch('/site.json');
  const siteData = await response.json();
  Object.assign(window.jekyllSite, siteData);
  Object.assign(window.jekyllSite, getLocalSite());
}

/** Some of the jekyll site variables depend on browser context. */
function getLocalSite() {
  return {
    baseurl: window.location.origin,
    active_lang: 'en',
  };
}
