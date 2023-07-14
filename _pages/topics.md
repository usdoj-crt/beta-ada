---
permalink: /topics/
title: Topics
hide_page_type_info: true
layout: default
lead: Featured topics are high-level, plain-language explanations of the existing information that the Department has made available about the law.

---
{% include landing-hero.html %}
<div class="grid-container" markdown="0">
  <div class="grid-row grid-gap margin-bottom-7 margin-top-7">
      <div class="tablet:grid-col-10">
<h1>Topics</h1>
<p>Featured topics are high-level, plain-language explanations of the existing information that the Department has made available about the law.</p>
{% details Learn more about Topics %}
<p>Featured topics are intended for an audience of people who are not legal experts. We expect that these overviews will answer 80 percent of common questions about a particular topic. They are designed to be easy to scan and navigate. They have clear headings and links that help users skip to a particular section. The overviews are also designed to be easy to understand. They use icons to help explain definitions and they provide clear examples.</p>
{% enddetails %}
</div>
</div>
</div>
{% include topic-jumplinks.html %}
{% include featured-topics.html %}
{% assign sorted_topics = site.topics | sort: 'card.title' %}
<div class="grid-container" markdown="0">
  <div class="grid-row grid-gap margin-bottom-7 margin-top-7">
      <div class="tablet:grid-col-10">
        <div class="grid-row grid-gap">
          <h2>All Topics</h2>
          <p>
            These topics are mentioned throughout the ADA. We’ve compiled overviews of these information areas to help you navigate the ADA as it relates to your field of interest.
          </p>
        </div>
    </div>
<div class="tablet:grid-col-12">
  <ul class="usa-card-group">
    {% for topic in sorted_topics %}
      {% if topic.topic-page-feature != true %}
      {% include card.html card=topic heading_level=2 %}
      {% endif %}
    {% endfor %}
  </ul>
</div>
</div>
</div>
