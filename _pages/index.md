---
permalink: /
layout: default
title: The Americans with Disabilities Act

alert:
  content: |-
    _We're working to make ADA.gov more user friendly. We've launched this beta site to share our work in progress. Let us know how we're doing so far._
  heading: |-
    Help us improve ADA.gov
  link:
    href: https://touchpoints.app.cloud.gov/touchpoints/73c5715c/submit
    text: Share feedback

hero:
  alt:
    desktop: |-
      Three people, two with visible disabilities, relaxing and talking outside.
    mobile: |-
      Five people, some with visible disabilities, hanging out on a rooftop deck while talking and laughing.
  content: |-
    Disability rights are civil rights. From voting to parking, the ADA is a law that protects people with disabilities in many areas of public life.
  heading: |-
    The Americans with Disabilities Act (ADA) protects people with disabilities from discrimination.

history:
  content: |-
    Since then, the ADA has transformed American society, guaranteeing that people with disabilities have the same opportunities as everyone else to enjoy employment opportunities, purchase goods and services, and participate in state and local government programs.

    The ADA was modeled after the Civil Rights Act of 1964, which prohibits discrimination on the basis of race, color, religion, sex, or national origin. The ADA is an equal opportunity law for people with disabilities.
  heading: |-
    History of the ADA
  lead: |-
    The ADA was signed into law on July 26, 1990, following many years of advocacy by the disability and civil rights communities.
  link:
    href: #
    text: Learn more ADA history

---

{% include landing/hero.html hero=page.hero %}

{% include landing/alert.html alert=page.alert %}

{% assign pages = site.pages | where_exp:"item","item.permalink contains '/topics/' and item.name != 'index.md'" %}
{% assign cards = pages | concat: site.data.cards %}
{% include landing/understand.html cards=cards %}

{% include landing/history.html history=page.history %}

{% include landing/report.html %}
