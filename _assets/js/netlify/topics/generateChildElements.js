const inlineTags = [
    'a',
    'abbr',
    'b',
    'em',
    'i',
    'strong',
    'time',
    'u',
    'table',
    'tr',
    'td',
    'th',
    'thead',
    'tbody',
    'tfoot',
    'caption'
];

const generateChildElements = (html) => {
    return html.map(item => {
        if (inlineTags.includes(item.nodeName.toLowerCase())) {
            return {'a': item.nodeName.toLowerCase(), 'b': {}, 'c': item.innerHTML};
        } else {
            if (Array.from(item.children).length > 0) {
                generateChildElements(Array.from(item.children));
            } else {
                return {'a': item.nodeName.toLowerCase(), 'b': {}, 'c': item.innerHTML};
            }
        }
    })
};

export default generateChildElements;