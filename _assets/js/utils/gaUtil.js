function getEventName(e) {
  if (e.target.dataset.gaEventName) {
    return e.target.dataset.gaEventName;
  }
  const ariaLabel = e.target.ariaLabel ?? 'unlabeled link element';
  const innerText = e.target.innerText ?? 'empty link element';
  return ariaLabel + ' ' + innerText;
}

function sendGAClickEvent(e) {
  e.preventDefault();
  const userVariant = document.cookie
    .split("; ")
    .find((row) => row.startsWith("ab_variant="))
    ?.split("=")[1];
  gtag('event', 'click', { event_name: getEventName(e), user_variant: userVariant });
  if (!e.target.href) return;
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
    ['.best-bet', 'click', sendGAClickEvent],
    ['.expand-all', 'click', sendGAClickEvent],
    ['.topic-jumplink', 'click', sendGAClickEvent],
    ['.file-a-complaint', 'click', sendGAClickEvent],
    ['.carousel-btn', 'click', sendGAClickEvent],
    ['.carousel-nav', 'click', sendGAClickEvent],
  ]

  export default function initGAEvents() {
    ANALYTICS_CONFIG.forEach(([selector, event, action]) => {
      document.querySelectorAll(selector).forEach(el => {
        el.addEventListener(event, action);
      });
    });
  }
