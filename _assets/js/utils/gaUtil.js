function sendGAClickEvent(event_name) {
    gtag('event', 'click', { event_name: event_name });
}

function gtag() {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push(arguments);
}

export default function initGAEvents() {
  const infoBoxLinks = document.getElementsByClassName("info-box-link");
  Array.from(infoBoxLinks).forEach((el) => {
    el.addEventListener('click', sendGAClickEvent(el.innerText));
  });
  relatedReportButton.addEventListener('click', sendGAClickEvent('view related reports'));
}
