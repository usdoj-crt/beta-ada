---
permalink: /search/
title: Search
sitemap: false
sidenav: false
---
{% include search-dust-text.html %}
{% if site.searchgov %}
<div tabindex='0' id="totalResultsTarget" class="margin-y-1"></div>
<ol id="search-results" class="add-list-reset"></ol>
{% include pagination.html %}
{% else %}
<script>
  window.location = "/";
</script>
{% endif %}
