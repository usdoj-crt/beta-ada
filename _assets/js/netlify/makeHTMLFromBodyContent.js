import { Liquid } from 'liquidjs';
import list from './markdownWidgets/list.js';
import listItem from './markdownWidgets/listItem.js';
import details from './markdownWidgets/details.js';

const engine = new Liquid();
const md = window.markdownit();
md.options['html'] = true;
md.options['linkify'] = true;
const parser = new DOMParser();
list(engine);
listItem(engine);
details(engine);

// Make asynchrnous
function makeHTMLFromBodyContent(bodyContent) {
  // The DOMParser returns a full HTML document, so grabbing the first child element actually grabs the <html> element because it is the first element under <!doctype>
  // the second child element of the <html> is the <body> element. We aren't starting at the <html> element but rather the <!doctype> tag.
  // Structure in terms of callbacks
  // Return what comes out of the engine
  // Think about using RxJs to handle the async
  engine.parseAndRender(md.render(bodyContent)).then(output => parser.parseFromString(output, 'text/html')).then(html => console.log(html.children[0].children[1].childNodes));
  const html = parser.parseFromString(md.render(bodyContent), 'text/html');
  const elementsArray = Array.from(html.children[0].children[1].childNodes);
  return elementsArray;
}

export default makeHTMLFromBodyContent;
