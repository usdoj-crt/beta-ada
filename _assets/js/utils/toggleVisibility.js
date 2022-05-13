export default function toggleVisibility(state) {
    // If none, do not filter
    // If 1 filter by one
    // If two, filter by both
    // If three filter by all
    const elements = Array.from(document.querySelectorAll('li.visibilityTarget'));
    const { titleTwo, titleThree, category } = state;
    console.log(elements);
    elements.forEach(element => {
        if (titleTwo === false && titleThree === false && category === "") {
            element.style.display = 'block';
        } else if (titleTwo === true && titleThree === false && category === "") {
            if (element.classList.includes('title-ii')){
                element.style.display = 'block'
            } else {
                element.style.display = 'none'
            }
        }
    })
}