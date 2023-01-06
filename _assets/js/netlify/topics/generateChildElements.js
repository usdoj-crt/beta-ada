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

    return h(
      item.nodeName.toLowerCase(),
      { id: item.id.toString(), className: item.className },
      content
    );
  });

export default generateChildElements;
