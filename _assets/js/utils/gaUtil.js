function sendGAClickEvent(e) {
  e.preventDefault();
  const event_name = e.target.ariaLabel + ' ' + e.target.innerText;
  gtag('event', 'click', { event_name: event_name });
  window.location.href = e.target.href;
}

function gtag() {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push(arguments);
}

export default function initGAEvents() {
  const infoBoxLinks = document.getElementsByClassName("info-box-link");
  Array.from(infoBoxLinks).forEach((el) => {
    el.addEventListener('click', sendGAClickEvent);
  });
  const relatedContentLinks = document.getElementsByClassName("related-content-link");
  Array.from(relatedContentLinks).forEach((el) => {
    el.addEventListener('click', sendGAClickEvent);
  });
  const alertLinks = document.getElementsByClassName("alert-link");
  Array.from(alertLinks).forEach((el) => {
    el.addEventListener('click', sendGAClickEvent);
  });
  const topicCardLinks = document.getElementsByClassName("topic-card__link");
  Array.from(topicCardLinks).forEach((el) => {
    el.addEventListener('click', sendGAClickEvent);
  });
  const learnLinks = document.getElementsByClassName("learn-link");
  Array.from(learnLinks).forEach((el) => {
    el.addEventListener('click', sendGAClickEvent);
  });
  const sideNavLinks = document.getElementsByClassName("crt-sidenav-subnav-item");
  Array.from(sideNavLinks).forEach((el) => {
    el.addEventListener('click', sendGAClickEvent);
  });
}
