---
permalink: /search/
lang: es
title: Búsqueda
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
    .then(function(res) {
      if (res.text_best_bets.length) {
        res.text_best_bets.forEach(function(item) {
          render_result(
            `
              <li class="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest">
                <b class="title"><a href="${item.url}">${item.title
              .replace(/\uE000/g, '<span class="bg-yellow">')
              .replace(/\uE001/g, "</span>")}</a></b>
                <div class="text-base"> ${item.url} </div>
                <div> ${item.description
                  .replace(/\uE000/g, '<span class="bg-yellow">')
                  .replace(/\uE001/g, "</span>")} </div>
              </li>
              `,
            true
          );
        });
      }
      return res;
    })
    .then(function(res) {
      if (res.web.results.length) {
        res.web.results.forEach(function(item) {
          render_result(
            `
              <li class="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest">
                <b class="title"><a href="${item.url}">${item.title
              .replace(/\uE000/g, '<span class="bg-yellow">')
              .replace(/\uE001/g, "</span>")}</a></b>
                <div class="text-base"> ${item.url} </div>
                <div> ${item.snippet
                  .replace(/\uE000/g, '<span class="bg-yellow">')
                  .replace(/\uE001/g, "</span>")} </div>
              </li>
              `,
            true
          );
        });
      }
      return res;
    })
    .then(function(res) {
      var prevLink = document.querySelector(".usa-pagination__previous-page");
      var nextLink = document.querySelector(".usa-pagination__next-page");
      var currentOffset = urlParams.get("offset");

      if (res.web.total > {{site.searchgov.limit}}) {
        document.getElementById("pagination-nav").removeAttribute("hidden");

        if (currentOffset > 0) {
          urlParams.set("offset", currentOffset - {{site.searchgov.limit}});
          prevLink.href = `?${urlParams.toString()}`;
        } else {
          prevLink.setAttribute("disabled", "true");
        }

        if (res.web.next_offset) {
          urlParams.set("offset", res.web.next_offset);
          nextLink.href = `?${urlParams.toString()}`;
        } else {
          nextLink.setAttribute("disabled", "true");
        }
      }
    })
    .catch(function(ex) {
      console.log("parsing failed", ex);
    })
    .finally(function(e) {
      if (document.getElementById("search-results").childNodes.length == 0) {
        render_result(
          `<li class="h4" style="list-style: none">No se han encontrado resultados</li>`,
          false
        );
      } else {
        var target = document.querySelector('#top');
        target.insertAdjacentHTML('afterend', '<div class=" text-base">Ordenado por más relevante</div>');
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
