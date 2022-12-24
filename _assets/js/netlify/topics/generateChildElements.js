//const notAllowed = ['table', 'tbody', 'thead', 'tr', 'td', 'th', 'strong', 'u', 'i', 'b'];
const output = [];


const generateChildElements = (html, depth=0) => {;
  html.map((item) => {
    console.log(`Current depth: ${depth} \n Current Node: ${item.nodeName} \n Children Nodes: ${item.children.length}`);
    h(item.nodeName.toLowerCase(),  {"id": item.id.toString(), "className": [...item.classList]},
        item.children.length > 0 ? generateChildElements(Array.from(item.children), depth+1) : item.innerHTML
    )
  });
//     if (notAllowed.includes(item.nodeName.toLowerCase())) {
//       return;
//     }
//     if (item.nodeName.toLowerCase() === 'ul') {
//       output.push(h(item.nodeName.toLowerCase(), { id: item.id, className: [...item.classList] }));
//       const children = Array.from(item.children);
//       children.forEach((child) => {
//         output.push(h('li', {}, child.innerHTML));
//       });
//     } else {
//       output.push(
//         h(
//           item.nodeName.toLowerCase(),
//           { id: item.id, className: [...item.classList] },
//           item.innerHTML
//         )
//       );
//     }
//  });
//  return output;
};

export default generateChildElements;
