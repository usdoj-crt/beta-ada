import toStyle from 'css-to-style';

const generateChildElements = (html) =>
  html.map((item) => {
    if (item.nodeType === Node.TEXT_NODE) return item.wholeText;
    // To Do: If it's not an element node, we prolly don't care about it, but we should check other types
    // to make sure.
    if (item.nodeType !== Node.ELEMENT_NODE) return;
    const itemHasChildren = item.childNodes?.length > 0;
    let content = [];
    if (itemHasChildren) {
      content.push(generateChildElements([...Array.from(item.childNodes)]));
    } else {
      content = null;
    }
    const attrs = Object.fromEntries(
      [...item.attributes].map((attr) => {
        let val = attr.value;
        if (attr.name === 'style') {
          val = toStyle(attr.value);
        }
        return [attr.name, val];
      })
    );
    return h(item.nodeName.toLowerCase(), attrs, content);
  });

export default generateChildElements;
