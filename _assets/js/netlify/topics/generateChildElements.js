const notAllowed = ['em', 'strong', 'u', 'i', 'b', 'ul', 'blockquote', 'table', 'thead', 'td', 'tr','tfooter', 'tbody'];

const generateChildElements = (html) =>
  html.map((item) => {
    if (item.children && item.children.length > 0) {
      if (notAllowed.includes(item.nodeName.toLowerCase())) {
        return h(
          item.nodeName.toLowerCase(),
          { "id": item.id.toString(), "className": item.className },
          generateChildElements([ ...Array.from(item.children)])
        )
      } else {
        return h(
          item.nodeName.toLowerCase(),
          { "id": item.id.toString(), "className": item.className },
          item.innerHTML,
          generateChildElements([ ...Array.from(item.children)])
        )
      }
  } else if (!notAllowed.includes(item.nodeName.toLowerCase())) {
    return h(
      item.nodeName.toLowerCase(),
      { "id": item.id.toString(), "className": item.className },
      item.innerHTML
    )
  }
    }
  );

export default generateChildElements;
