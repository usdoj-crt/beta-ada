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

When we talk about what the ADA requires on ADA.gov, we are usually referring to two sources:

1. The text of the ADA, also referred to as the ADA statute, passed by Congress in
1990 and later amended.
2. Regulations developed by the Department of Justice that state/local governments
and many businesses must follow to ensure that they do not discriminate against
people with disabilities.

<div class="tablet:grid-col-12" markdown="0">
    <ul class="usa-card-group">
        {% for page in site.law-and-regs %}
            {% if page.card %}
                {% include card.html card=page heading_level=2 %}
            {% endif %}
        {% endfor %}
    </ul>
</div>

## The Americans with Disabilities Act (ADA)

The Americans with Disabilities Act was passed by Congress in 1990. It was amended
by Congress in 2008. This is the law that protects the civil rights of people with
disabilities in many aspects of public life.

[The Americans with Disabilities Act]( {{'/law-and-regs/ada' | relative_url}})

Learn more about the ADA on our [Introduction to the ADA page]( {{'/topics/intro-to-ada'| relative_url}}).

## ADA Regulations

DOJ is responsible for issuing regulations under Titles II and III of the Americans with Disabilities Act (ADA) that explain the rights of people with disabilities and the obligations of those covered by the law.

- For more information about the ADA generally, check out [Introduction to the Americans with Disabilities Act]( {{'/topics/intro-to-ada' | relative_url}}).
- For more information about Title II of the ADA, see [State and Local Governments]( {{'/topics/title-ii' | relative_url}}).
- For more information about Title III of the ADA, see [Businesses That Are Open to the Public]( {{'/topics/title-iii' | relative_url}}).

{% details What is a regulation? %}
A regulation (also called a "rule") is a set of requirements issued by a federal agency to implement laws passed by Congress.  When Congress passes laws, many details are often left to federal agencies to flesh out in regulations.  For example, when Congress passed the ADA, it gave DOJ the authority to issue regulations that explain the rights and obligations under Titles II and III of the ADA.
{% enddetails %}

Check out DOJ’s current ADA regulations:

- [Title II]({{'/law-and-regs/title-ii-2010-regulations/' | relative_url}}) (State and Local Governments)
{% include download.html text="Download PDF for ADA's Title II Regulations" filename="title-ii-2010-regulations.pdf" %} (4.2MB, 279 Pages)
- [Title III]( {{'/law-and-regs/title-iii-regulations' | relative_url}}) (Public Accommodations and Commercial Facilities)
{% include download.html text="Download PDF for ADA's Title III Regulations" filename="title-iii-2010-regulations.pdf" %} (4.2MB, 279 Pages)

In the [Spring 2023 Unified Agenda](https://www.reginfo.gov/public/do/eAgendaMain), DOJ announced that it plans to issue new ADA regulations on the following topics:

- [Medical Diagnostic Equipment](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202304&RIN=1190-AA78)
- [Title II Web Accessibility](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202304&RIN=1190-AA79)
- [The Public Right of Way](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202304&RIN=1190-AA77)
- [Equipment and Furniture](https://www.reginfo.gov/public/do/eAgendaViewRule?pubId=202304&RIN=1190-AA76)

{% details What is the Unified Agenda? %}
The [Unified Agenda](https://www.reginfo.gov/public/jsp/eAgenda/UA_About.myjsp) provides information about federal agencies’ regulatory priorities and the specific regulations that they plan to issue in the short and long term.
{% enddetails %}

## Design Standards

[View the 1991 and 2010 Design Standards, and the Guidance on the 2010 ADA Standards for Accessible Design]({{'/law-and-regs/design-standards' | relative_url }}).

</div>
</div>
</div>