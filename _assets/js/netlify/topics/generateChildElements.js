const notAllowed = ['em', 'strong', 'u', 'i', 'b'];

const generateChildElements = (html) =>
  html.map((item) => {
    if (item.children && item.children.length > 0) {
      return h(
        item.nodeName.toLowerCase(),
        { "id": item.id.toString(), "className": item.className },
        // Problem: We never display the inner content of the first element
        generateChildElements(Array.from(item.children))
      )
  } else {
    return h(
      item.nodeName.toLowerCase(),
      { "id": item.id.toString(), "className": item.className },
      item.innerHTML
    )
  }
    }
  );

export default generateChildElements;
