---
permalink: /
layout: default
title: The Americans with Disabilities Act
description: Disability rights are civil rights. From voting to parking, the ADA is a law that protects people with disabilities in many areas of public life.

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

understand:
  heading: Topics
  lead: |-
    Information for people with disabilities, state and local governments, and businesses
  content: |-
    <strong>Pick a topic to find out how the ADA works.</strong> We’ll add more soon.

history:
  content: |-
    Since then, the ADA has transformed American society, guaranteeing that people with disabilities have the same opportunities as everyone else to enjoy employment opportunities, purchase goods and services, and participate in state and local government programs.

    The ADA was modeled after the Civil Rights Act of 1964, which prohibits discrimination on the basis of race, color, religion, sex, or national origin. The ADA is an equal opportunity law for people with disabilities.
  heading: |-
    History of the ADA
  lead: |-
    The ADA was signed into law on July 26, 1990, following many years of advocacy by the disability and civil rights communities.
  paragraph1: |-
    Since then, the ADA has transformed American society, guaranteeing
    that people with disabilities have the same opportunities as everyone
    else to enjoy employment opportunities, purchase goods and services,
    and participate in state and local government programs.
  paragraph2: |-
    The ADA was modeled after the Civil Rights Act of 1964, which
    prohibits discrimination on the basis of race, color, religion, sex,
    or national origin. The ADA is an equal opportunity law for people
    with disabilities.

news:
  heading: New on beta.ADA.gov
  lead: |-
    Explore the new content we've added to beta.ADA.gov

report:
  heading: How to Report a Disability Rights Violation
  lead: |-
    If you believe that you or someone else experienced unlawful discrimination, you can report a disability rights violation.
  steps:
    - heading: Report using our online form.
      content: |-
        By completing the online form, you can provide the details we need to understand what happened. You will receive a confirmation number and your report is immediately sent to our staff for review.
    - heading: We review your report.
      content: |-
        Teams that specialize in handling your type of issue will review it. If it needs to be forwarded to another team or agency, we will try to connect your complaint to the right group.
    - heading: We determine next steps and get back to you.
      content: |-
        Possible outcomes include: following up for more information, starting a mediation or investigation, directing you to another organization for further help, or informing you that we cannot help.
  subheading: |-
    Think you or someone you know has experienced a disability rights violation?
  link:
    text: File a complaint
---

{% include landing/hero.html hero=page.hero %}

{% include landing/alert.html alert=page.alert %}

{% include landing/news.html news=page.news %}

{% include landing/understand.html understand=page.understand %}

{% include landing/history.html history=page.history %}

{% include landing/report.html report=page.report %}
