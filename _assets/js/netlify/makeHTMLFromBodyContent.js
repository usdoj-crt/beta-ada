import renderWidgets from "./markdownWidgets/renderMdWidgets";

const md = window.markdownit();
md.options['html'] = true;
md.options['linkify'] = true;
const parser = new DOMParser();

// Make asynchrnous
async function makeHTMLFromBodyContent(bodyContent) {
  // The DOMParser returns a full HTML document, so grabbing the first child element actually grabs the <html> element because it is the first element under <!doctype>
  // the second child element of the <html> is the <body> element. We aren't starting at the <html> element but rather the <!doctype> tag.
  // Structure in terms of callbacks
  // Return what comes out of the engine
  // Think about using RxJs to handle the async
  const interimHTML = md.render(bodyContent);
  const renderedHTML = await renderWidgets(interimHTML);
  const html = parser.parseFromString(renderedHTML, 'text/html');
  const elementsArray = Array.from(html.children[0].children[1].childNodes);
  return elementsArray;
}

export default makeHTMLFromBodyContent;
