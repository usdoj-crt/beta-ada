//const notAllowed = ['table', 'tbody', 'thead', 'tr', 'td', 'th', 'strong', 'u', 'i', 'b'];

const generateChildElements = (html) =>
  html.map((item) => {
    if (item.children.length > 0) {
      return h(
        item.nodeName.toLowerCase(),
        { "id": item.id.toString(), "className": [...item.classList] },
        generateChildElements(Array.from(item.children))
      )
  } else {
    return h(
      item.nodeName.toLowerCase(),
      { "id": item.id.toString(), "className": [...item.classList] },
      item.innerHTML
    )
  }
    }
  );

export default generateChildElements;
