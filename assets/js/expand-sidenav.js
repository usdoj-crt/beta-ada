const sidenav = () => {
  const expandButton = document.getElementById('expand-all');
  const expandText = document.querySelector('.expand-text');
  const expandIcon = expandButton.querySelector('.usa-icon');
  const nav = document.querySelector('.usa-accordion.margin-bottom-2');
  function expandAll() {
    const submenuButtons = document.getElementsByClassName('usa-accordion__button');
    const innerText = expandText.innerText;
    let expandingAll = innerText === 'Expand all';
    Array.from(submenuButtons).forEach((button) => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      if (!isExpanded && expandingAll) button.click();
      if (isExpanded && !expandingAll) button.click();
    });
    expandText.innerText = expandingAll ? 'Collapse all' : 'Expand all';
    expandIcon.innerHTML = expandingAll
      ? '<use xlink:href="/assets/images/uswds/sprite.svg#expand_less"></use>'
      : '<use xlink:href="/assets/images/uswds/sprite.svg#expand_more"></use>';
    nav.scrollTop = 0;
  }

  if (expandButton) {
    expandButton.addEventListener('click', function (e) {
      e.preventDefault();
      expandAll();
    });
  }
};

export default sidenav;
