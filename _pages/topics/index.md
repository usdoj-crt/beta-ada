---
permalink: /topics/
title: ADA Topics
sidenav: false
lead: |-
  Information for businesses, state and local governments, and people with disabilities.
---

{% assign pages = site.pages | where_exp:"item","item.permalink contains '/topics/' and item.name != 'index.md'" %}
{% assign cards = pages %}
{% if site.data.cards.first %}
{% assign cards = cards | concat: site.data.cards %}
{% endif %}

{% assign featured = cards | where_exp:"item","item.featured" | sort:"weight" %}
{% assign cards = cards | where_exp:"item","item.featured != true" | sort %}

{% assign cards = featured | concat: cards %}

<div class="grid-row grid-gap">
  <ul class="usa-card-group">
    {% for card in cards %}
      {% include card.html card=card heading_level=2 %}
    {% endfor %}
  </ul>
</div>
