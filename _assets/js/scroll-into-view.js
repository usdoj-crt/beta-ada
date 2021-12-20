function scrollToElement(scrollToId) {
    var element = document.getElementById(scrollToId);
    element.scrollIntoView({behavior: "smooth"});
}