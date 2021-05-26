---
permalink: /
layout: default
title: Home
---

{% include landing/hero.html hero=page.hero %}

<div class="crt-landing--section crt-landing--alert crt-blue">
  {% include landing/alert.html
    heading="pages.landing.alert.heading"
    content="pages.landing.alert.content"
    href="pages.landing.alert.link.href"
    text="pages.landing.alert.link.text"
  %}
</div>

{% include landing/understand.html cards=page.cards %}
{% include landing/history.html history=page.history %}
{% include landing/report.html %}
