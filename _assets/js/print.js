const preparePageForPrint = function() {
  const beforePrint = function() {
    document.querySelectorAll("details").forEach(detail => {
      detail.setAttribute("open", true);
    });
  };
  const afterPrint = function() {
    document.querySelectorAll("details").forEach(detail => {
      detail.removeAttribute("open");
    });
  };

  if (window.matchMedia) {
    const mediaQueryList = window.matchMedia("print");
      if (mediaQueryList.matches) {
        beforePrint();
      } else {
        afterPrint();
      }
    };
  
  window.onbeforeprint = beforePrint;
  window.onafterprint = afterPrint;
};

preparePageForPrint();
