function sendGAClickEvent(e) {
  e.preventDefault();
  const ariaLabel = e.target.ariaLabel ?? 'unlabeled link element';
  const innerText = e.target.innerText ?? 'empty link element';
  const event_name = ariaLabel + ' ' + innerText;
  gtag('event', 'click', { event_name: event_name });
  window.location.href = e.target.href;
}

function gtag() {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push(arguments);
}

  const ANALYTICS_CONFIG = [
    ['.related-content-link', 'click', sendGAClickEvent],
    ['.alert-link', 'click', sendGAClickEvent],
    ['.topic-card__link', 'click', sendGAClickEvent],
    ['.learn-link', 'click', sendGAClickEvent],
    ['.crt-sidenav-subnav-item', 'click', sendGAClickEvent],
    ['.info-box-link', 'click', sendGAClickEvent],
  ]
  
  export default function initGAEvents() {
    ANALYTICS_CONFIG.forEach(([selector, event, action]) => {
      document.querySelectorAll(selector).forEach(el => {
        el.addEventListener(event, action);
      });
    });
  }
