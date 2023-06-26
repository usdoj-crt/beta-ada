const sidenav = () => {
    const expandButton = document.getElementById('expand-all');

    function expandAll(e) {
        const submenuButtons = document.getElementsByClassName('usa-accordion__button');
        expandingAll = e.target.innerText === 'Expand all';
        Array.from(submenuButtons).forEach(button => {
            const isExpanded = button.getAttribute('aria-expanded') === "true";
            if (!isExpanded && expandingAll) button.click();
            if (isExpanded && !expandingAll) button.click();
        });
        e.target.innerText = expandingAll ? 'Collapse all' : 'Expand all';
    }

    if (expandButton) {
        expandButton.addEventListener('click', function(e){
            expandAll(e);
        });
    }
}

export default sidenav;