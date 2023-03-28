import renderWidgets from "./markdownWidgets/renderMdWidgets";
const md = window.markdownit();
md.options['html'] = true;
md.options['linkify'] = true;
const parser = new DOMParser();
function makeHTMLFromBodyContent(bodyContent) {
  // Replace any <hr> tags with markdown so they render outside of the nearest <p> tag
  const content = bodyContent.replace(/<hr>/g, "***");
  // The DOMParser returns a full HTML document, so grabbing the first child element actually grabs the <html> element because it is the first element under <!doctype>
  // the second child element of the <html> is the <body> element. We aren't starting at the <html> element but rather the <!doctype> tag.
  const interimHTML = md.render(bodyContent);
  const renderedHTML = renderWidgets(interimHTML);
  const html = parser.parseFromString(renderedHTML, 'text/html');
  const elementsArray = Array.from(html.children[0].children[1].childNodes);
  return elementsArray;
};

export default makeHTMLFromBodyContent;
