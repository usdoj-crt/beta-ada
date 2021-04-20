---
permalink: /
layout: wide
title: Home
cards:
  - title: Introduction to the ADA
    description: |-
      Find out how the ADA is structured, and how it protects the rights of people with disabilities.
    image: landing/Intro_ADA-placeholder.png
    alt: Two women at a restaurant with glasses on the table signing to one another
    href: /guides/intro-to-ada/
  - title: Service animals
    description: |-
      Find out how the ADA defines a service animal, where they can go, and how they assist people with disabilities.
    image: landing/Service_animal-placeholder.png
    alt: A woman in a wheelchair with a dog partially on her lap as the dog holds a TV remote in its mouth
    href: /guides/service-animals/
  - title: Parking
    description: |-
      Parking ipsum dolor sit amet, conset tur adipiscing elit, sed do eiusmod.
    image: landing/Parking-placeholder.png
    alt: A man in a wheelchair approaching a vehicle with his hand on the door handle
    href: /guides/parking/
---

<div class="crt-landing--section crt-landing--hero crt-landing--pale" markdown="0">
  {% asset hero-mobile.jpg alt="" class="height-auto width-full tablet:display-none" %}
  <div class="grid-container">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-8">
        <h1>
          The Americans with Disabilities Act (ADA) protects people with
          disabilities from discrimination.
        </h1>
      </div>
      <div class="tablet:grid-col-6">
        <div class="crt-landing--separator"></div>
        <p class="crt-landing--largetext">
          Disability rights are civil rights. From voting to parking, the ADA
          protects people with disabilities and helps businesses and local
          governments ensure their facilities and services are accessible.
        </p>
      </div>
    </div>
  </div>
</div>

{% include alert.html heading="Help us improve ADA.gov" %}

<div class="crt-landing--section crt-landing--description crt-landing--lightblue" markdown="0">
  <div class="grid-container">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-10">
        <h2 class="h1">
          Understand the basics of ADA
        </h2>
        <div class="crt-landing--separator"></div>
        <p class="crt-landing--description__rights">
          The ADA protects people with disabilities from discrimination in many areas of public life.
        </p>
      </div>
      <div class="tablet:grid-col-12">
        <div class="grid-row grid-gap">
          <p class="crt-landing--largetext">
            <strong>Pick a topic to find out how the ADA works.</strong> We’ll be adding more guides soon.
          </p>
          <ul class="usa-card-group">
            {% for card in page.cards %}
              {% include card.html card=card %}
            {% endfor %}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="crt-landing--section crt-landing--description crt-landing--pale" markdown="0">
  <div class="grid-container">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-10">
        <h2 id="about-the-division" class="h1">
          History of the ADA
        </h2>
        <div class="crt-landing--separator"></div>
        <p class="crt-landing--description__rights">
          The ADA was signed into law on July 26, 1990, following many years of advocacy by the disability and civil rights communities.
        </p>
        <p class="crt-landing--largetext">
         Since then, the ADA has transformed American society, guaranteeing that people with disabilities have the same opportunities as everyone else to enjoy employment opportunities, purchase goods and services, and participate in state and local government programs.
        </p>
        <p class="crt-landing--largetext">
          The ADA was modeled after the Civil Rights Act of 1964, which prohibits discrimination on the basis of race, color, religion, sex, or national origin. The ADA is an equal opportunity law for people with disabilities.
        </p>
      </div>
    </div>

  </div>
</div>

<div
  id="crt-landing--reporting"
  class="crt-landing--section crt-landing--how_to_report crt-landing--blue"
  markdown="0"
>
  <div class="grid-container">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-12">
        <h2 class="h1 text__reverse" id="report-a-violation">
          How to report a disability rights violation
        </h2>
        <div class="crt-landing--separator_small"></div>
      </div>
      <div class="tablet:grid-col-9">
        <p class="crt-landing--largetext">
          If you believe that you or someone else experienced unlawful
          discrimination, you can report a civil rights violation.
        </p>
      </div>
      <div class="tablet:grid-col-12">
        <div class="grid-row grid-gap">
          <div class="tablet:grid-col-4 crt-landing--section__item">
            <div class="crt-landing--reporting_column">
              <div class="h4 crt-landing--icon_gold">1</div>
              <div>
                <h2 class="h3 text__reverse">
                  Report using our online form.
                </h2>
                <p class="margin-bottom-0">
                  By completing the online form, you can provide the details we
                  need to understand what happened. You will receive a
                  confirmation number and your report is immediately sent to our
                  staff for review.
                </p>
              </div>
            </div>
          </div>
          <div class="tablet:grid-col-4 crt-landing--section__item">
            <div class="crt-landing--reporting_column">
              <div class="h4 crt-landing--icon_gold">2</div>
              <div>
                <h2 class="h3 text__reverse">
                  We review your report.
                </h2>
                <p class="margin-bottom-0">
                  Teams that specialize in handling your type of issue will
                  review it. If it needs to be forwarded to another team or
                  agency, we will try to connect your complaint to the right
                  group.
                </p>
              </div>
            </div>
          </div>
          <div class="tablet:grid-col-4 crt-landing--section__item">
            <div class="crt-landing--reporting_column">
              <div class="h4 crt-landing--icon_gold">3</div>
              <div>
                <h2 class="h3 text__reverse">
                  We determine next steps and get back to you.
                </h2>
                <p class="margin-bottom-0">
                  Possible outcomes include: following up for more information,
                  starting a mediation or investigation, directing you to
                  another organization for further help, or informing you that
                  we cannot help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="crt-landing--lightblue" markdown="0">
  <div class="grid-container">
    <div class="crt-landing--arrow"></div>
  </div>
</div>
<div class="crt-landing--section crt-landing--submit crt-landing--lightblue" markdown="0">
  <div class="grid-container">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-10">
        <h2 class="h2">
          Think you or someone you know has experienced a disability rights violation?
        </h2>
        <a class="usa-button usa-button--big crt-button--large" href="#"
          >Submit a report</a
        >
      </div>
    </div>
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-6">
        <p class="crt-landing--text">
          <em
            >If you cannot access the online form, you can
            <a href="#phone-footer">call</a> to report a violation or report a
            violation by <a href="#address-footer">mail</a>.</em
          >
        </p>
      </div>
    </div>
  </div>
</div>
