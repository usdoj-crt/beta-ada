![Pa11y](https://github.com/usdoj-crt/beta-ada/actions/workflows/pa11y.yml/badge.svg)


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
    OR
    $ bundle exec jekyll serve

To build but not serve the site, run `npm run build` or `bundle exec jekyll build`.

#### With Docker
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

#### With locally installed `node` and `ruby`
    $ npm test

#### With Docker
    $ docker-compose run node npm test

## Technologies you should be familiarize yourself with

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
