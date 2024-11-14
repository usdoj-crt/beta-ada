---
permalink: /search/
title: Search
sitemap: false
sidenav: false
description: Search result page featuring results from ADA.gov and Archive.ADA.gov.
redirect_from:
  - /search.htm
---
{% if site.searchgov %}
<div class="grid-row grid-gap-xl">
<div id="crt-page--sidenav" class="desktop:grid-col-4" markdown="0">
  {% include searchgov/filters.html searchgov=site.searchgov %}
</div>
<div class="mobile-lg:grid-col tablet:grid-col-12 desktop:grid-col-8">
<h1 id="top">Search</h1>
<div class="crt-landing--separator_small"></div>
  <div tabindex='0' id="totalResultsTarget" class="margin-y-1"></div>
  <ol id="search-results" class="add-list-reset"></ol>
  {% include pagination.html %}
</div>
{% else %}
<script>
  window.location = "/";
</script>
{% endif %}
