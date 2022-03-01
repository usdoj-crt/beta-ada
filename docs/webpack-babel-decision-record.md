# [Javascript Build Process]

* Status: accepted
* Deciders: Jack Ryan, Billy Hunt, Imran Lodi <!-- optional -->
* Date: 2022-02-28 <!-- optional -->

Technical Story: [Ticket](https://github.com/usdoj-crt/beta.ADA.gov-Project-Management/issues/384) <!-- optional -->

## Context and Problem Statement

We already use Jekyll Assets. Why use Webpack?

Using Webpack will allow us to bundle, minify/compress and transpile our code so it is more performant and will work on more browsers all while modernizing our development environment. A great article that reviews why one would want to use Webpack vs. Jekyll Assets Pipeline (Sprockets) is [here](https://rossta.net/blog/why-does-rails-install-both-webpacker-and-sprockets.html). These reasons for using Webpack are lifted directly from that article, but apply to our current setup:
- I need more control over aspects of our asset compilation
- My app has a lot of JavaScript and needs code-splitting features to avoid massive payloads
- I'm concerned about long-term support (of Sprockets/Jekyll Asset Pipeline)
- I want to use a proper JavaScript module system to manage dependencies, i.e., limit global scope pollution and have an explicit dependency graph with import/export and require
- I want to take advantage of the cutting edge features from ES6+, Babel, PostCSS

A good thing to note is that we are currently moving into a modern Rails-like development configuration where Jekyll Assets handles the CSS/images/fonts/markdown and Webpack does all the JS.

We already use Github Super Linter, why add Prettier?

Github Super Linter does not support using Prettier. Prettier is a bit different from other code linters like ESLint (which Super Linter does support). Prettier enforces a consistent code style, rather than consistent code conventions. The goal of Prettier is to make sure that certain formatting decisions are always enforced. It can make code more readable, but isn't necessarily geared towards preventing bugs.

## Decision Drivers <!-- optional -->

* Using modern Javascript
* Performance optimizations - bundling, compression and transpilation
* Adhering to industry standards
* JavaScript linting via Prettier

## Considered Options

* Webpack + Babel
* ESBuild
* Parcel

## Decision Outcome

Chosen option: "Webpack and Babel", because though ESBuild compiles much faster, Webpack is more widely supported, and has a much larger user base. It is better tested as a result. It is easier to target older browsers and has more plugins built out already as well. ESBuild could be a worthy replacement as the build time is considerably faster and the configuration is much simpler. But I want ESBuild to get to version 1 and have broader support before we consider using it. Another consideration for the future is integrating ESLint via Github's Super Linter.

