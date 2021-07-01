(function() {
  var beforePrint = function() {
    document.querySelectorAll("details").forEach(detail => {
      detail.setAttribute("open", true);
    });
  };
  var afterPrint = function() {
    document.querySelectorAll("details").forEach(detail => {
      detail.removeAttribute("open");
    });
  };

  if (window.matchMedia) {
    var mediaQueryList = window.matchMedia("print");
    mediaQueryList.addListener(function(mql) {
      if (mql.matches) {
        beforePrint();
      } else {
        afterPrint();
      }
    });
  }

  window.onbeforeprint = beforePrint;
  window.onafterprint = afterPrint;
})();
