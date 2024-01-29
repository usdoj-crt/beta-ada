---
permalink: /search/
title: Search
sitemap: false
sidenav: false
compact: true
description: Search result page featuring results from ADA.gov and Archive.ADA.gov.
redirect_from:
  - /search.htm
---
{% if site.searchgov %}
<div class="grid-row"  markdown="0">
  {% include searchgov/filters.html searchgov=site.searchgov %}
  <div class="grid-col-8" >
    <div tabindex='0' id="totalResultsTarget" class="margin-y-1"></div>
    <ol id="search-results" class="add-list-reset"></ol>

    {% include pagination.html %}

  </div>
</div>
{% else %}
<script>
  window.location = "/";
</script>
{% endif %}
