const sidenav = () => {
  const expandButton = document.getElementById('expand-all');

  function expandAll(e) {
    const submenuButtons = document.getElementsByClassName('usa-accordion__button');
    const innerText = e.target.querySelector('.expand-text').innerText;
    let expandingAll = innerText === 'Expand all';
    Array.from(submenuButtons).forEach((button) => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      if (!isExpanded && expandingAll) button.click();
      if (isExpanded && !expandingAll) button.click();
    });
    e.target.querySelector('.expand-text').innerText = expandingAll ? 'Collapse all' : 'Expand all';
    e.target.querySelector('.usa-icon').outerHTML = expandingAll
      ? '<svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/images/uswds/sprite.svg#expand_less"></use></svg>'
      : '<svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/images/uswds/sprite.svg#expand_more"></use></svg>';
  }

  if (expandButton) {
    expandButton.addEventListener('click', function (e) {
      expandAll(e);
    });
  }
};

export default sidenav;
