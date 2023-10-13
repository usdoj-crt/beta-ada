---
permalink: /law-and-regs/
title: Laws, Regulations & Standards
description: Regulations developed by the Department of Justice that explain the rights of people with disabilities and the obligations of those covered by the law.
sidenav: false
compact: true
layout: default
hide_page_type_info: true
redirect_from:
    - /2010_regs.htm
    - /pubs/ada.htm
    - /newproposed_regs.htm
    - /pcatoolkit/chap3toolkit.htm
    - /regs_footer.htm
    - /regs2010/
    - /regs2010/index.html
    - /regs2010/adaregs2010.htm
    - /regs2010/ADAregs2010.htm
tags:
    - design standards
---

{% include landing-hero.html mobile-src="law-reg.png" alt="laws and regulations landing hero image" page="laws-and-regs" %}

<div class="grid-container">
<div class="grid-row grid-gap margin-bottom-7 margin-top-7">
<div class="tablet:grid-col-10">

# Laws, Regulations & Standards

## The Americans with Disabilities Act (ADA)

The Americans with Disabilities Act was passed by Congress in 1990. It was amended by Congress in 2008. This is the law that protects the civil rights of people with disabilities in many aspects of public life.

For more information about the ADA generally, check out the [Introduction to the Americans with Disabilities Act]( {{'/topics/intro-to-ada'| relative_url}}).

[Jump to the full text of the ADA.](#law-reg-text)

## ADA Regulations

{% details What is a regulation? %}
A regulation (also called a "rule") is a set of requirements issued by a federal agency to implement laws passed by Congress.  When Congress passes laws, many details are often left to federal agencies to flesh out in regulations.  For example, when Congress passed the ADA, it gave DOJ the authority to issue regulations that explain the rights and obligations under Titles II and III of the ADA.
{% enddetails %}

DOJ is responsible for issuing regulations under Titles II and III of the Americans with Disabilities Act (ADA) that explain the rights of people with disabilities and the obligations of state/local governments and many businesses to ensure that they do not discriminate against people with disabilities.

For an introduction to Title II of the ADA, see [State and Local Governments]( {{'/topics/title-ii' | relative_url}}).

For an introduction to Title III of the ADA, see [Businesses That Are Open to the Public]( {{'/topics/title-iii' | relative_url}}).

[Jump to the full text of the regulations.](#law-reg-text)

## Design Standards

The Design Standards were adopted in the Titles II and III regulations. The standards set minimum accessibility requirements for newly designed and constructed or altered State and local government facilities, public accommodations, and commercial facilities to be usable by individuals with disabilities.

[Jump to the full text of the design standards.](#law-reg-text)

## Unified Agenda

{% details What is the Unified Agenda? %}
The [Unified Agenda](https://www.reginfo.gov/public/jsp/eAgenda/UA_About.myjsp) provides information about federal agencies’ regulatory priorities and the specific regulations that they plan to issue in the short and long term.
{% enddetails %}

In the [Spring 2023 Unified Agenda](https://www.reginfo.gov/public/do/eAgendaMain), DOJ announced that it plans to issue new ADA regulations on the following topics:

- [Medical Diagnostic Equipment](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202304&RIN=1190-AA78)
- [Title II Web Accessibility](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202304&RIN=1190-AA79)
- [The Public Right of Way](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202304&RIN=1190-AA77)
- [Equipment and Furniture](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202304&RIN=1190-AA76)

</div>

<div class="tablet:grid-col-12 margin-top-7" markdown="0">
<a id="law-reg-text"></a>
    <ul class="usa-card-group">
        {% for page in site.law-and-regs %}
            {% if page.card %}
                {% include card.html card=page heading_level=2 %}
            {% endif %}
        {% endfor %}
    </ul>
</div>
</div>
</div>