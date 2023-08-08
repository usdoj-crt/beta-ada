import renderWidgets from "./renderMdWidgets";
const md = window.markdownit();
md.options['html'] = true;
md.options['linkify'] = true;
const parser = new DOMParser();
function makeHTMLFromBodyContent(bodyContent, variables, imageData) {
  // Replace any <hr> tags with markdown so they render outside of the nearest <p> tag
  let content = bodyContent
    ? bodyContent
      .replaceAll(/<hr>/g, "***")
      .replaceAll("{{'", '')
      .replaceAll("' | relative_url}}", '')
    : '';
  const contentParts = content.split('{');
  contentParts.forEach(contentPart => {
    if (contentPart.includes('% details')) {
      const newText = contentPart.replaceAll("'", '$');
      content = content.replace(contentPart, newText);
    }
  });
  // The DOMParser returns a full HTML document, so grabbing the first child element actually grabs the <html> element because it is the first element under <!doctype>
  // the second child element of the <html> is the <body> element. We aren't starting at the <html> element but rather the <!doctype> tag.
  const interimHTML = md.render(content);
  const renderedHTML = renderWidgets(interimHTML, variables, imageData);
  const html = parser.parseFromString(renderedHTML, 'text/html');
  const elementsArray = Array.from(html.children[0].children[1].childNodes);
  return elementsArray;
};

export default makeHTMLFromBodyContent;
