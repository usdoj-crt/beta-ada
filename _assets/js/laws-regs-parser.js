export default function parseLawsAndRegs (mainContent) {
    if (!mainContent) return;

    const parent = mainContent.parentElement;
    const clone = mainContent.cloneNode(true);
    const contentNodes = Array.from(clone.childNodes);
    const subpartIndices = [0];
    const subparts = [createDiv('subpart')];
    let lastHeading = 0;
    let length = 1;
    const sections = contentNodes.map((node, i) => {
        const isInteractiveHeader = getIsInteractiveHeader(contentNodes, node, i);
        if (!isInteractiveHeader) return null;
        if (node.localName === 'h2') {
            const subpart = createDiv('subpart');
            subparts.push(subpart);
            subpartIndices.push(length);
        }
        const sectionText = contentNodes
            .slice(lastHeading, i)
            .map(node => node.outerHTML).join(' ');
        lastHeading = i;
        length++
        const section = createDiv('section');
        section.innerHTML = sectionText.trim();
        return section;
    }).filter(section => !!section);

    let currentSubpart = subparts[0];
    sections.forEach((section, i) => {
        currentSubpart = subpartIndices.includes(i) ? subparts[subpartIndices.indexOf(i)] : currentSubpart;
        if (i !== 0 && Array.from(section.childNodes).length >= 2 && !subpartIndices.includes(i)) {
            const btnDiv = buildBtns(i, '.section');
            section.firstChild.after(btnDiv);
            const jumpLink = document.createElement('a');
            jumpLink.id = 'section' + i.toString();
            section.prepend(jumpLink);
        }
        currentSubpart.appendChild(section);
    });

    const newMainContent = buildMainContent(subparts);


    parent.insertBefore(newMainContent, mainContent);
    mainContent.remove()
}

function buildMainContent(subparts) {
    const newMainContent = createDiv('interactive-headers');
    subparts.forEach((subpart, i) => {
        if (!Array.from(subpart.childNodes).length >= 1) newMainContent.appendChild(subpart);
        const btnDiv = buildBtns(i, '.subpart');
        subpart.getElementsByTagName('h2')[0]?.after(btnDiv);
        const jumpLink = document.createElement('a');
        jumpLink.id = 'subpart' + i.toString();
        subpart.prepend(jumpLink);
        newMainContent.appendChild(subpart);
    });
    return newMainContent;
}

function getIsInteractiveHeader(contentNodes, node, i) {
    const headings = ['h2', 'h3', 'h4', 'h5'];
    if (i === contentNodes.length - 1) return true;
    if (node.id === null) return false;
    return headings.includes(node.localName);
}

function createDiv(className) {
    const div = document.createElement('div');
    div.className = className;
    return div;
}

function buildBtns(i, divType) {
    const btnDiv = createDiv('btn-group display-flex flex-row flex-justify maxw-card');
    const btnTypes = ['Share', 'Copy', 'Print'];
    btnTypes.forEach(btnType => {
        const btn = document.createElement('a');
        btn.className = btnType + '-btn text-no-underline section-btn';
        const gaEventName = 'data-ga-event-name="' + btnType + ' ' + divType + ' ' + i + '"';
        btn.setAttribute('aria-label', btnType);
        btn.href = '#';
        if (btnType === 'Share') {
            btn.innerHTML = '<span class="copied-link text-no-underline" style="display:none;">Copied link</span><svg ' + gaEventName + ' class="usa-icon share-icon usa-tooltip" data-position="bottom" title="Copy link" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#link"></use></svg>';
            btn.addEventListener('click', (e) => { shareLink(e, divType) });
        } else if (btnType === 'Copy') {
            btn.innerHTML = '<span class="copied text-no-underline" style="display:none;">Copied text</span><svg ' + gaEventName + ' class="usa-icon copy-icon usa-tooltip" data-position="bottom" title="Copy text" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#content_copy"></use></svg>';
            btn.addEventListener('click', (e) => { copyText(e, divType) });
        } else if (btnType === 'Print') {
            btn.innerHTML = '<svg ' + gaEventName + ' class="usa-icon usa-tooltip" data-position="bottom" title="Print" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#print"></use></svg>';
            btn.addEventListener('click', (e) => { printText(e, divType) });
        }
        btnDiv.appendChild(btn);
    });
    return btnDiv;
}

function copyText(e, divType) {
    e.preventDefault();
    const section = e.target.closest(divType);
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(section);
    selection.removeAllRanges();
    selection.addRange(range);
    // using deprecated execCommand function to maintain formatting lost when using navigate
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    const copyText = section.getElementsByClassName('copied')[0];
    const copyIcon = section.getElementsByClassName('copy-icon')[0];
    copyText.style.display = 'block';
    copyIcon.style.display = 'none';
    setTimeout(() => {
        copyText.style.display = 'none';
        copyIcon.style.display = 'block';
    }, 2000);
}

function printText(e, divType) {
    e.preventDefault();
    const section = e.target.closest(divType);
    const winPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    winPrint.document.write(section.outerHTML);
    Array.from(winPrint.document.getElementsByClassName('btn-group')).forEach(btnGroup => btnGroup.style.display = 'none');
    winPrint.document.close();
    winPrint.focus();
    winPrint.print();
    winPrint.close();
}

function shareLink(e, divType) {
    e.preventDefault();
    const section = e.target.closest(divType);
    const url = window.location.href + '#' + section.firstChild.id;
    navigator.clipboard.writeText(url);
    const copyLinkText = section.getElementsByClassName('copied-link')[0];
    const shareIcon = section.getElementsByClassName('share-icon')[0];
    copyLinkText.style.display = 'block';
    shareIcon.style.display = 'none';
    setTimeout(() => {
        copyLinkText.style.display = 'none';
        shareIcon.style.display = 'block';
    }, 2000);
}
