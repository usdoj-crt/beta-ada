---
permalink: /search/
title: Search
sitemap: false
description: Search result page featuring results from ADA.gov and Archive.ADA.gov.
redirect_from:
  - /search.htm
---
{% if site.searchgov %}
<div markdown="0">
    <div tabindex='0' id="totalResultsTarget" class="margin-y-1"></div>
    <ol id="search-results" class="add-list-reset"></ol>

    {% include pagination.html %}

  </div>
{% else %}
<script>
  window.location = "/";
</script>
{% endif %}
