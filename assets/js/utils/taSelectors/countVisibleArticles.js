export default function countVisibleArticles() {
    const elements = Array.from(document.querySelectorAll('li.visibilityTarget'));
    let numVisible = [];
    elements.forEach((elem)=> {
        elem.style.display === 'block' ? numVisible.push(elem) : null;
    })
    return numVisible.length;
}