function scrollToElement(targetId) {
    var element = document.getElementById(targetId);
    element.scrollIntoView({behavior: "smooth"});
}