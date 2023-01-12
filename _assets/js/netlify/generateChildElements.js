const generateChildElements = (html) =>
  html.map((item) => {
    if (item.nodeType === Node.TEXT_NODE) return item.wholeText;
    // To Do: If it's not an element node, we prolly don't care about it, but we should check other types
    // to make sure.
    if (item.nodeType !== Node.ELEMENT_NODE) return;
    const itemHasChildren = item.childNodes?.length > 0;
    const content = [];
    if (itemHasChildren) {
      content.push(generateChildElements([...Array.from(item.childNodes)]));
    }
    const attrsObj = {};
    if (item.attributes.length > 0) {
      for (const key of Array.from(item.attributes)) {
        attrsObj[key.name] = key.value;
      }
    }
    return h(
      item.nodeName.toLowerCase(),
      attrsObj,
      content
    );
  });

export default generateChildElements;
