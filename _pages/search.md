---
permalink: /search/
title: Search
sitemap: false
sidenav: false
---

<script>
  //<![CDATA[

  var urlParams = new URLSearchParams(window.location.search);
  var searchEndpoint = new URL("{{site.searchgov.endpoint}}/api/v2/search/i14y");
  params = {
    affiliate: "{{site.searchgov.affiliate}}",
    access_key: "{{site.searchgov.access_key}}",
    query: urlParams.get("query"),
    offset: urlParams.get("offset") || 0,
    limit: {{site.searchgov.limit}}
  };

  Object.keys(params).forEach(key =>
    searchEndpoint.searchParams.append(key, params[key])
  );

  fetch(searchEndpoint)
    .then(function(res) {
      return res.json();
    })
    .then(function(posts) {
      for (item in posts.web.results) {
        render_result(
          `
          <li class="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest">
            <b class="title"><a href="${posts.web.results[item]["url"]}">${
            posts.web.results[item]["title"]
              .replace(/\uE000/g, '<span class="bg-yellow">')
              .replace(/\uE001/g, "</span>")
          }</a></b>
            <div class="text-base"> ${posts.web.results[item]["url"]} </div>
            <div> ${posts.web.results[item]["snippet"]
              .replace(/\uE000/g, '<span class="bg-yellow">')
              .replace(/\uE001/g, "</span>")} </div>
          </li>
          `,
          true
        );
      }
      return posts.web;
    })
    .then(function(posts) {
      var prevLink = document.querySelector(".usa-pagination__previous-page");
      var nextLink = document.querySelector(".usa-pagination__next-page");
      var currentOffset = urlParams.get("offset");

      if (currentOffset > 0) {
        urlParams.set("offset", currentOffset - params.limit);
        prevLink.href = `?${urlParams.toString()}`;
      } else {
        prevLink.setAttribute("disabled", "true");
      }

      if (posts.next_offset) {
        urlParams.set("offset", posts.next_offset);
        nextLink.href = `?${urlParams.toString()}`;
      } else {
        nextLink.setAttribute("disabled", "true");
      }
    })
    .catch(function(ex) {
      console.log("parsing failed", ex);
    })
    .finally(function(e) {
      if (document.getElementById("search-results").childNodes.length == 0) {
        render_result(
          `<li class="h4" style="list-style: none">No results found</li>`,
          false
        );
      } else {
        document.getElementById("pagination-nav").removeAttribute("hidden");
      }
    });

  function render_result(content, append = true) {
    const previous = document.getElementById("search-results").innerHTML;
    document.getElementById("search-results").innerHTML =
      append == true ? previous + content : content;
  }

  //]]>
</script>

{% if site.searchgov %}

<ol id="search-results" class="add-list-reset"></ol>
{% include pagination.html %}
{% else %}
<script>
  window.location = "/";
</script>
{% endif %}
