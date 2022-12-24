import generateChildElements from "./generateChildElements";

const makeTemplate = (title, leadText, body) => {
    return h('div', {"id": "crt-page--content", "className":"mobile-lg:grid-col tablet:grid-col-12 desktop:grid-col-8"},
        h('h1', {}, title),
        h('div', {"className":"measure-6"},
        h('div', {"className":"crt-lead"},
          h('p', {}, leadText)
        ),
        generateChildElements(body)
        // body.map(item=> h(
        //   item.nodeName.toLowerCase(),
        //   { "id": item.id.toString(), "className": [...item.classList] },
        //   item.innerHTML))
        ))
  };

export default makeTemplate;
