# [Javascript Build Process]

* Status: accepted
* Deciders: Jack Ryan, Billy Hunt, Imran Lodi <!-- optional -->
* Date: 2022-02-28 <!-- optional -->

Technical Story: [Ticket](https://github.com/usdoj-crt/beta.ADA.gov-Project-Management/issues/384) <!-- optional -->

## Context and Problem Statement

We already use Jekyll Assets. Why use webpack?

Using Webpack will allow us to bundle, minify/compress and transpile our code so it is more performant and will work on more browsers all while modernizing our development environment.


## Decision Drivers <!-- optional -->

* Using modern Javascript
* Performance optimizations - bundling, compression and transpilation
* Adhering to industry standards & incorporating

## Considered Options

* Webpack + Babel
* ESBuild
* Parcel

## Decision Outcome

Chosen option: "Webpack and Babel", because though ESBuild compiles much faster, Webpack is more widely supported, and has a much larger user base. It is better tested as a result. It is easier to target older browsers and has more plugins built out already as well. ESBuild could be a worthy replacement as the build time is considerably faster.

