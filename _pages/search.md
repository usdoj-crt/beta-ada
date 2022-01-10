---
permalink: /search/
title: Search
sitemap: false
sidenav: false
---

{% if site.searchgov %}

<ol id="search-results" class="add-list-reset"></ol>
{% include pagination.html %}
{% else %}
<script>
  window.location = "/";
</script>
{% endif %}
