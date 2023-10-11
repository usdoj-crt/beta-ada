export default function pageSearch() {
const searchBtn = document.getElementById('searchbtn');
searchBtn.addEventListener('click', search);
}

function search() {
    const searchBox = document.getElementById('searchbox');
    const searchQuery = searchBox.value.toLowerCase();
    if (!searchQuery.length) return;
    const sections = document.querySelectorAll('.section')
    for (let i = 0; i < sections.length; i++) {
        removeHighlights(sections[i]);
        if(sections[i].innerText.toLowerCase()
            .includes(searchQuery)) {
            sections[i].classList.remove("hidden");
            sections[i].classList.add("searched");
            highlightTerm(searchQuery, sections[i]);
        } else {
            sections[i].classList.add("hidden");
            sections[i].classList.remove("searched");
        }
    }
}

function highlightTerm(text, section) {
    let innerHTML = section.innerHTML;
    const index = innerHTML.toLowerCase().indexOf(text);
    if (index >= 0) {
     innerHTML = innerHTML.substring(0, index) + "<span class='search-term'>" + innerHTML.substring(index, index + text.length) + "</span>" + innerHTML.substring(index + text.length);
     section.innerHTML = innerHTML;
    }
  }

function removeHighlights(section) {
    const spanStart = '<span class="search-term">';
    const spanEnd = "</span>";
    const innerHTML = section.innerHTML.replaceAll(spanStart, '').replaceAll(spanEnd, '');
    section.innerHTML = innerHTML;
}
