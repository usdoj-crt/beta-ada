---
permalink: /topics/
lang: es
title: Temas de la ADA
sidenav: false
lead: Información para empresas, gobiernos estatales y locales y personas con discapacidades.
---

{% assign pages = site.pages | where_exp:"item","item.permalink contains '/topics/' and item.name != 'index.md'" %}
{% assign cards = pages %}
{% assign featured = cards | where_exp:"item","item.featured" | sort:"weight" %}
{% assign cards = cards | where_exp:"item","item.featured != true" | sort:"title" %}

{% assign cards = featured | concat: cards %}

<div class="grid-row grid-gap">
  <ul class="usa-card-group">
    {% for card in cards %}
      {% include card.html card=card heading_level=2 %}
    {% endfor %}
  </ul>
</div>
