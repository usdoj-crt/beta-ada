---
permalink: /search/
title: Search
sitemap: false
sidenav: false
<<<<<<< HEAD
compact: true
redirect_from:
  - /search.htm
=======
redirect_to: https://www.ada.gov/search/
>>>>>>> 89f7e73078618ea9d22fd162dc0ad833672c6569
---
{% if site.searchgov %}
<div tabindex='0' id="totalResultsTarget" class="margin-y-1"></div>
<ol id="search-results" class="add-list-reset"></ol>
{% include pagination.html %}
{% else %}
<script>
  window.location = "/";
</script>
{% endif %}
