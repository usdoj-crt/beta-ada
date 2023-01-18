import { Liquid } from 'liquidjs';
import accordion from './accordion';
import collapsible from './collapsible';
import details from './details.js';
import figure from './figure';
import footnote from './footnote';
import footnoteBody from './footnoteBody';
import footnoteList from './footnoteList';
import list from './list.js';
import listItem from './listItem.js';

const engine = new Liquid();
accordion(engine);
collapsible(engine);
details(engine);
figure(engine);
footnote(engine)
footnoteBody(engine)
footnoteList(engine)
list(engine);
listItem(engine);

function renderWidgets(interimHTML){
   const renderedHTML = engine.parseAndRenderSync(interimHTML);
   return renderedHTML;
}

export default renderWidgets;
