import { Liquid } from 'liquidjs';
import list from './list.js';
import listItem from './listItem.js';
import details from './details.js';

const engine = new Liquid();
list(engine);
listItem(engine);
details(engine);

function renderWidgets(interimHTML){
   const renderedHTML = engine.parseAndRenderSync(interimHTML);
   return renderedHTML;
}

export default renderWidgets;
