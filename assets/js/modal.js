const modal = () => {
  let dom = document;
  window.CRT = window.CRT || {};

  const previous_onkeydown = dom.onkeydown;
  const focusable_elements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  window.CRT.openModal = function (modal_el) {
    dom.onkeydown = function (event) {
      event = event || window.event;
      let isEscape = false;
      if ('key' in event) {
        isEscape = event.key === 'Escape' || event.key === 'Esc';
      } else {
        isEscape = event.keyCode === 27;
      }
      if (isEscape) {
        window.CRT.closeModal(modal_el);
      }
      let isTab = false;
      if ('key' in event) {
        isTab = event.key === 'Tab';
      } else {
        isTab = event.key === 9;
      }
      if (isTab) {
        const first = modal_el.querySelectorAll(focusable_elements)[0];
        const focusable_content = modal_el.querySelectorAll(focusable_elements);
        const last = focusable_content[focusable_content.length - 1];
        if (event.shiftKey) {
          // browse clickable elements moving backwards
          if (document.activeElement === first) {
            last.focus();
            event.preventDefault();
          }
        } else {
          // browse clickable elements moving forwards
          if (document.activeElement === last) {
            first.focus();
            event.preventDefault();
          }
        }
      }
    };
    modal_el.removeAttribute('hidden');
    // get first input in this modal so we can focus on it
    const first = modal_el.querySelectorAll(focusable_elements)[0];
    first.focus();
    dom.body.classList.add('is-modal');
  };

  window.CRT.closeModal = function (modal_el) {
    dom.onkeydown = previous_onkeydown;
    modal_el.setAttribute('hidden', 'hidden');
    dom.body.classList.remove('is-modal');
  };

  window.CRT.cancelModal = function (modal_el, cancel_el) {
    const dismissModal = function (event) {
      event.preventDefault();
      window.CRT.closeModal(modal_el);
    };
    cancel_el.addEventListener('click', dismissModal);
  };
};

export default modal;
