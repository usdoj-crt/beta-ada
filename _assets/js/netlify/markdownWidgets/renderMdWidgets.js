import { Liquid } from 'liquidjs';
import accordion from './accordion';
import asset from './asset';
import collapsible from './collapsible';
import details from './details';
import figcaption from './figcaption';
import figure from './figure';
import footnote from './footnote';
import footnoteBody from './footnoteBody';
import footnoteList from './footnoteList';
import list from './list';
import listItem from './listItem';

const engine = new Liquid();
accordion(engine);
asset(engine);
collapsible(engine);
details(engine);
figcaption(engine);
figure(engine);
footnote(engine);
footnoteBody(engine);
footnoteList(engine);
list(engine);
listItem(engine);

function renderWidgets(interimHTML){
   const renderedHTML = engine.parseAndRenderSync(interimHTML);
   return renderedHTML;
}

export default renderWidgets;