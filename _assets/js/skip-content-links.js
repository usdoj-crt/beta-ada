//= require ./scroll-into-view.js
// Grab our links:
var skipSideNav = document.getElementById('crt-skipnav-sidenav');
var skipToMain = document.getElementById('crt-skipnav-main');

// Assign an event listener
if (skipSideNav) {
    skipSideNav.addEventListener('click', function(){
        scrollToElement(skipSideNav.getAttribute('data-scrollto'))
    });
}

if (skipToMain) {
    skipToMain.addEventListener('click', function(){
        scrollToElement(skipToMain.getAttribute('data-scrollto'))
    });
}