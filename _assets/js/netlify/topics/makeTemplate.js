import generateChildElements from "./generateChildElements";

const makeTemplate = (title, leadText, body) => {
    console.log(generateChildElements(body));
    return h('div', {"id": "crt-page--content", "className":"mobile-lg:grid-col tablet:grid-col-12 desktop:grid-col-8"},
        h('h1', {}, title),
        h('div', {"className":"measure-6"},
        h('div', {"className":"crt-lead"},
          h('p', {}, leadText)
        ),
        // This only checks to the first level depth:
        // Needed changes: don't do inline tags, em, strong, etc.
        // Make truly recursive
        body.map(item =>
          item.children.length > 0 ? Array.from(item.children).map(child => h(child.nodeName.toLowerCase(), {}, child.innerHTML)) : h(item.nodeName.toLowerCase(), {}, item.innerHTML))));
  };

export default makeTemplate;
