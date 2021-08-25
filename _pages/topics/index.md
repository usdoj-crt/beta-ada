---
permalink: /topics/
title: Topics
sidenav: false
layout: full
lead: Information for people with disabilities, state and local governments, and businesses
---
{% assign featured = site.pages | where_exp:"item","item.permalink contains '/topics/' and item.featured" | sort:"weight" | reverse %}
{% assign pages = site.pages | where_exp:"item","item.permalink contains '/topics/' and item.featured != true and item.name != 'index.md'" | sort: 'card.title' %}
{% assign cards = featured | concat: pages %}

<div class="grid-row grid-gap">
  <ul class="usa-card-group">
    {% for card in cards %}
      {% include card.html card=card heading_level=2 %}
    {% endfor %}
  </ul>
</div>
