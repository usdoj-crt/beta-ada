const md = window.markdownit();
md.options['html'] = true;
md.options['linkify'] = true;
const parser = new DOMParser();
// This function takes our body content as input, turns the markdown into HTML,
// then loops over the html elements
const makeBodyContent = (bodyContent) => {
  let html = parser.parseFromString(md.render(bodyContent), 'text/html');
  let elements = html.children[0].children[1].childNodes;
  let elementsArray = Array.from(elements).filter((elem) => elem.nodeType === 1);
  return elementsArray;
};

export default makeBodyContent;
