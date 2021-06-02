---
permalink: /
layout: default
title: Home

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

cards:
  - title: Introduction to the ADA
    title_alt: the ADA
    description: |-
      Find out how the ADA is structured, and how it protects the rights of people with disabilities.
    image: landing/intro_ada.jpg
    alt: A teacher and a student sitting at a table signing to one another
    href: /topics/intro-to-ada/
  - title: Service animals
    description: |-
      Find out how the ADA defines a service animal, where they can go, and how they assist people with disabilities.
    image: landing/service_animals.jpg
    alt: A service animal helps a blind person down the stairs
    href: /topics/service-animals/
  - title: Parking
    description: |-
      <em>Coming soon!</em>
    image: landing/parking.jpg
    alt: A man in a wheelchair approaching a vehicle with his hand on the door handle
    position: top
---

{% include landing/hero.html hero=page.hero %}

{% include landing/alert.html alert=page.alert %}

{% include landing/understand.html cards=page.cards %}

{% include landing/history.html history=page.history %}

{% include landing/report.html %}
