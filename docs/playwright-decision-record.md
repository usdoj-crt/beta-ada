# [UI Testing]

* Status: accepted
* Deciders: Jack Ryan 
* Date: 2022-04-20 

Technical Story: [Ticket](https://github.com/usdoj-crt/beta.ADA.gov-Project-Management/issues/431) 

## Context and Problem Statement

As we are building out the website, we are adding more interactive features. We need a way to do UI testing on these features to make sure they function as expected.

We can use Playwright to do this. 

## Decision Drivers 

* Playwright Test contains all of the features we need, test runner, writer and API.
* Wide coverage - Chromium, Firefox, Webkit + mobile
* Codegen - we can mimic the exact user interactions we want to test and generate tests from those actions
* Operates headless versions of these browsers so we can be certain that our testing environment closely replicates that of our users

## Considered Options

* Puppeteer + Jest + Testing Library - complicated setup and limited test coverage (Chromium only)

## Decision Outcome

Chosen option: Playwright. Playwright offers a simplicity in setup, configuration and usage that doesn't quite exist yet with other testing suites. The codegen option is a nice feature for quickly spinning up tests, and we can do unit and snapshot testing. The real seller is the wide test coverage. Since it fires up a headless version of the browser, we can test our local dev environments (we could with Puppeteer too, but Playwright is better than Puppeteer for our use case).
