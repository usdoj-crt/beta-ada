---
title: Content Audit
short_title: Brian's homework
permalink: /guides/practice1/
lead: |-
  To acclimate Cindy to this new platform and language, Brian tasked her with adding new content to beta using a text mockup.
---

## What
A listing and analysis of all the content on an existing website (including pages, files, videos, audio or other data) that your users might reasonably encounter.

## Why
To identify content that needs to be revised in new versions of a website.  Content audits can also help you identify who is responsible for content.

## How to do it
1. Identify
2. Create an inventory
  1. Title used in site's navigation
  2. URL
3. Identify
4. From
5. For
  1. Author
  2. Content
6. Done

## Examples from 18F
- [Test hyperlink to ADA] (https://www.ada.gov)
- Why does it look like this?

## Going Rogue
Practice


| States | Capitals [^1]|
|----|----|
| Kentucky | Frankfurt|
| Virginia | Richmond |
|California | Sacramento |
| Ohio | Columbus |
{:.usa-table}

[^1]: Footnote text.

## Considerations for use in government

<div class="grid-container" markdown="0">
  <div class="grid-row">
    <div class="tablet:grid-col-6">
      {% capture list %}
      - Marked (to discourage parking in them)
      - The same length as the space it serves
      - Level with the parking space it serves
      {% endcapture %}
      {% include icon-list.html list=list type="green-check" %}
    </div>
    <div class="tablet:grid-col-6">{% asset project-images/aisle-parking.png alt="A van-accessible parking space sharing an access aisle with an accessible parking space for a car" %}</div>
  </div>
</div>

Two parking spaces can share an access aisle (except in angled parking).

An access aisle can be placed on either side of the parking space (except in angled parking).

### Parking Spaces

Accessible parking spaces must be provided for cars and vans.

#### Car accessible spaces must:

<div class="grid-container" markdown="0">
  <div class="grid-row">
    <div class="tablet:grid-col-6">
      {% capture list %}
      - Be at least 96 inches wide
      - Have an access aisle at least 60 inches wide
      - Have no more than a 2 percent slope in all directions
      - Have a surface that is firm, stable, and slip-resistant
      - Have a sign with the international symbol of accessibility on it, mounted at least 60 inches above the ground (measured to the bottom of the sign)
      {% endcapture %}
      {% include icon-list.html list=list type="green-check" %}
    </div>
      <div class="tablet:grid-col-6">{% asset project-images/car-accessible.png alt="Accessible parking spaces with 60-inch minimum width access aisle for cars" %}</div>
  </div>
</div>

#### Van accessible spaces must:

<div class="grid-container" markdown="0">
  <div class="grid-row">
    <div class="tablet:grid-col-6">
      {% capture list %}
      - Be at least 96 inches wide
      - Have an access aisle at least 96 inches wide
      - Have no more than a 2 percent slope in all directions
      - Have a surface that is firm, stable and slip-resistant
      - Have two signs, mounted at least 60 inches above the ground (measured to the bottom of the sign)
      - First sign: international symbol of accessibility
      - Second sign: stating that the space is van accessible
      {% endcapture %}
      {% include icon-list.html list=list type="green-check" %}
    </div>
      <div class="tablet:grid-col-6">{% asset project-images/van-accessible.png alt="Minimum 96-inch wide van-accessible parking space with 96-inch minimum width access aisle" %}</div>
  </div>
</div>

## Calculating Accessible Parking Spaces

The number of accessible parking spaces must be considered separately for each parking facility, not based on the total number of parking spaces provided on a site.

The chart below shows the number of accessible spaces required by the [2010 Standards](https://www.ada.gov/regs2010/2010ADAStandards/2010ADAstandards.htm%23c2).

<table class="usa-table">
  <thead>
    <tr>
      <th scope="col">Total number of parking spaces provided in a parking lot or facility</th>
      <th scope="col">Minimum number of
accessible parking spaces permitted</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1 to 25</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">26 to 50</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">51 to 75</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">76 to 100</th>
      <td>4</td>
    </tr>
    <tr>
      <th scope="row">101 to 150</th>
      <td>5</td>
    </tr>
    <tr>
      <th scope="row">151 to 200</th>
      <td>6</td>
    </tr>
    <tr>
      <th scope="row">201 to 300</th>
      <td>7</td>
    </tr>
    <tr>
      <th scope="row">301 to 400</th>
      <td>8</td>
    </tr>
    <tr>
      <th scope="row">401 to 500</th>
      <td>9</td>
    </tr>
    <tr>
      <th scope="row">501 to 1000</th>
      <td>2 percent of total</td>
    </tr>
    <tr>
      <th scope="row">1001 and over</th>
      <td>20, plus 1 for each 100, or fraction thereof, over 1000</td>
    </tr>
    <tr>
      <th scope="row">One of every six spaces must be van accessible.</th>
      <td></td>
    </tr>
  </tbody>
</table>

## Special Parking Conditions

### Limited Parking

Where parking spaces are limited to four or fewer spaces:

<div class="grid-container" markdown="0">
  <div class="grid-row">
    <div class="tablet:grid-col-6">
      {% capture list %}
      - One van accessible parking space must be provided
      - Anyone can park in that space
      - Not required to have a sign with the international symbol of accessibility | red-x
      {% endcapture %}
      {% include icon-list.html list=list type="green-check" %}
    </div>
    <div class="tablet:grid-col-6">{% asset project-images/limited-spaces.png alt="Front of a convenience store with four parking spaces, one parking space is a van-accessible space" %}</div>
  </div>
</div>

### Parking at Hospital Facilities

#### Hospital Outpatient Facilities
{% capture list %}
- Ten percent of patient and visitor parking must be accessible.
{% endcapture %}
{% include icon-list.html list=list type="error" %}

#### Rehabilitation Facilities
{% capture list %}
- Twenty percent of patient and visitor parking must be accessible.
{% endcapture %}
{% include icon-list.html list=list type="error" %}

#### Outpatient Physical Therapy Facilities
{% capture list %}
- Twenty percent of patient and visitor parking must be accessible.
{% endcapture %}
{% include icon-list.html list=list type="error" %}

## Learn More About the ADA and Accessible Parking

You might find the links below helpful:

- [ADA Update: Primer for Small Businesses](https://www.ada.gov/regs2010/smallbusiness/smallbusprimer2010.html)
- [ADA Update: A Primer for State and Local Governments](https://www.ada.gov/regs2010/titleII_2010/title_ii_primer.html)
- [ADA Compliance Brief: Restriping Parking Spaces](https://www.ada.gov/restriping_parking/restriping2015.html)
