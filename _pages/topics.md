---
permalink: /topics/
title: Featured Topics
hide_page_type_info: true
layout: full
lead: Information for people with disabilities, state and local governments, and businesses
redirect_to: https://www.ada.gov/topics/
---

<div class="grid-row grid-gap">
  <ul class="usa-card-group">
    {% for topic in site.topics %}
      {% include card.html card=topic heading_level=2 %}
    {% endfor %}
  </ul>
</div>
