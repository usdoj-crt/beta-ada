const redirectModal = () => {
  // note that modal.js must be loaded beforehand
  let dom = document;
  const modal_el = dom.getElementById("external-link--modal");
  const span = dom.getElementById("external-link--address");
  const links = dom.querySelectorAll(".external-link--popup");
  const continue_button = dom.getElementById("external-link--continue");
  let redirect;
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.onclick = function(event) {
      const href = event.target.href;
      event.preventDefault();
      // display the actual redirect link
      span.innerHTML = '<a href="' + href + '">' + href + "</a>";
      window.CRT.openModal(modal_el);
      // set timeout for redirect
      clearTimeout(redirect);
      redirect = setTimeout(function() {
        // only redirect if modal is still visible
        if (modal_el.getAttribute("hidden") === null) {
          window.location.href = href;
        }
      }, 20000);

      // set up "continue" button to immediately redirect
      continue_button.onclick = function(event) {
        event.preventDefault();
        const href = span.children[0].href;
        window.location.href = href;
      };
    };
  }
  const cancel_modal = dom.getElementById("external-link--cancel");
  window.CRT.cancelModal(modal_el, cancel_modal);
};

redirectModal();