![Test](https://github.com/usdoj-crt/beta-ada/actions/workflows/test.yml/badge.svg)

# beta-ada

This site uses [Jekyll](https://jekyllrb.com), a Ruby-based static site generator and is built with the [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov), a set of reusable, high-quality components for modern websites. Additionally, this site is optimized for deployment on 18F's [Federalist](https://federalist.18f.gov) publishing service.

## Getting Started

### Installation for development
    $ git clone https://github.com/usdoj-crt/beta-ada
    $ cd beta-ada

### Running the application

This site requires Ruby and Node.js in order to run locally. For guidance on installing the project's requirements, please see the [Local development environment](https://github.com/usdoj-crt/beta-ada/wiki/Local-development-environment) wiki page.

#### With locally installed `node` and `ruby`
    $ npm install
    $ bundle install
    $ npm start

Note that running `npm start` will disable some features of the site for performance reasons. See _config.dev.yml, or search for jekyll.environment or Jekyll.env for details.

To build but not serve the site, run `npm run build`.

#### With Docker: UNDER CONSTRUCTION
    $ docker-compose run node npm install
    $ docker-compose build
    $ docker-compose up

To build but not serve the site, run:
```
docker-compose run ruby bundle exec jekyll build
```

Note that when built by Federalist, `npm run federalist` is used instead of
`npm run build`.

Open your web browser to [localhost:4000](http://localhost:4000/) to view your
site.

### Testing

UI & Snapshot testing is accomplished using [Playwright](https://playwright.dev/).

UI Tests confirm that individual features of the interface perform as expected, while Snapshot testing looks for changes in each page from a previous, stored version and flags any changes.

Currently testing is only available on development branches, though the plan is to eventually add Snapshot testing to our Github Actions suite.

To run:

### Initialize Playwright Test on your computer:

In the root directory of the beta-ada/ project folder, run the following command:
```
npm init playwright@latest
```

A series of prompts will appear after that, these will help initialize your project.

Follow these steps to correctly initialize your project. Note you only need to initialize the project once.

1. Do you want to use TypeScript or JavaScript?
- JavaScript

2. Where to put your end-to-end tests?
- tests

3. Add a Github Actions workflow?
- n

4. Playwright will then download playwright versions of the chromium, webkit and firefox browsers.

5. A `playwright.config.js` file already exists, DO NOT OVERRIDE IT.
- n

You are now initialized! Also, it's assumed that you've run `npm install` by now, but if you haven't already, go ahead and do that to install Playwright.

#### To Test locally with `node` and `Playwright`
    $ npm run test:ui

#### With Docker
    $ docker-compose run node npm run test:ui

#### Testing external links

We've written tests to enable Playwright to check our markdown redirects (files in _pages/redirects).

To check these specifically, you can run:

```bash
npx playwright test redirects.spec.js --reporter list --project='chromium' --retries=0
```

Because those redirects depend on the destination link existing, it's important to be able to check that it doesn't 404 (e.g., in case archive.ada.giv/ was specified instead of archive.ada.gov/). We don't want to do that automatically, though, because there's a lot of redirects and we'd end up pelting production with a lot of requests.

To check the validity of links locally using playwright, you can run with CHECK_EXTERNAL_LINKS set to 'true'. This will make `HEAD` requests to all of the destination URLs, and warn if any of the response statuses aren't `200`.

```bash
CHECK_EXTERNAL_LINKS=true npx playwright test redirects.spec.js --reporter list --project='chromium' --retries=0
```

### Content grid

A content grid is generated as an artifact of every pull request as part of the github actions to centralize information about the content on the site. The content grid contains the title, link, deployment date, publish date, updated date, description, and tags of all content pages on the site. This can be retrieved by downloading the artifact from the github action "Build Content Grid".

## Technologies you should familiarize yourself with

- [Jekyll](https://jekyllrb.com/docs/) - The primary site engine that builds your code and content.
- [Front Matter](https://jekyllrb.com/docs/frontmatter) - The top of each page/post includes keywords within `--` tags. This is meta data that helps Jekyll build the site, but you can also use it to pass custom variables.
- [U.S. Web Design System v 2.0](https://v2.designsystem.digital.gov)

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright
> and related rights in the work worldwide are waived through the [CC0 1.0
> Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication.
> By submitting a pull request, you are agreeing to comply with this waiver of
> copyright interest.
