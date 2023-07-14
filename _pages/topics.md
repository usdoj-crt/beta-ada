---
permalink: /topics/
title: Featured Topics
description: These topic overviews are a basic starting point for understanding areas the ADA covers including service animals, parking and effective communication.
hide_page_type_info: true
layout: full
lead: Information for people with disabilities, state and local governments, and businesses
---

<div class="grid-row grid-gap">
  <ul class="usa-card-group">
    {% for topic in site.topics %}
      {% include card.html card=topic heading_level=2 %}
    {% endfor %}
  </ul>
</div>
