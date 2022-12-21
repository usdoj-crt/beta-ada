const makeTemplate = (title, leadText, body) => {
    return h('div', {"id": "crt-page--content", "className":"mobile-lg:grid-col tablet:grid-col-12 desktop:grid-col-8"},
        h('h1', {}, title),
        h('div', {"className":"measure-6"},
        h('div', {"className":"crt-lead"},
          h('p', {}, leadText)
        ),
        body.map(item =>
          item.nodeName == 'UL' ? console.log('UL') : h(item.nodeName.toLowerCase(), {}, item.innerHTML))));
  };