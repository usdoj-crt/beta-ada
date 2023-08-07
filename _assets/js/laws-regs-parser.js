export default function parseLawsAndRegs (mainContent) {
    if (!mainContent) return;

    const headings = ['h2', 'h3', 'h4', 'h5', 'strong'];
    const parent = mainContent.parentElement;
    const newMainContent = document.createElement('div');
    newMainContent.className = 'interactive-headers';
    const clone = mainContent.cloneNode(true);
    const contentNodes = Array.from(clone.childNodes);
    const sections = [];
    const firstSubpart = document.createElement('div');
    firstSubpart.className = 'subpart';
    const subpartIndices = [0];
    const subparts = [firstSubpart];
    let lastHeading = 0;
    contentNodes.map((node, i) => {
        if (!(headings.includes(node.localName)
            || i === contentNodes.length - 1)) return;
        if (node.localName === 'h2') {
            const subpart = document.createElement('div');
            subpart.className = 'subpart';
            subparts.push(subpart);
            subpartIndices.push(sections.length + 1);
        }
        const sectionText = contentNodes
            .slice(lastHeading, i)
            .map(node => node.outerHTML).join(' ');
        sections.push(sectionText);
        lastHeading = i;
    });

    let currentSubpart = subparts[0];
    sections.map((section, i) => {
        if (!section.length) return;
        const sectionContainer = document.createElement('div');
        sectionContainer.className = 'section';
        sectionContainer.innerHTML = section.trim();
        currentSubpart = subpartIndices.includes(i) ? subparts[subpartIndices.indexOf(i)] : currentSubpart;
        if (i !== 0 && Array.from(sectionContainer.childNodes).length >= 2 && !subpartIndices.includes(i)) {
            const btnDiv = buildBtns('.section');
            sectionContainer.firstChild.after(btnDiv);
            const jumpLink = document.createElement('a');
            jumpLink.id = 'section' + i.toString();
            sectionContainer.prepend(jumpLink);
        }
        currentSubpart.appendChild(sectionContainer);
    });

    subparts.map((subpart, i) => {
        if (Array.from(subpart.childNodes).length >= 1) {
            const btnDiv = buildBtns('.subpart');
            console.log(subpart.childNodes)
            subpart.getElementsByTagName('h2')[0]?.after(btnDiv);
            const jumpLink = document.createElement('a');
            jumpLink.id = 'subpart' + i.toString();
            subpart.prepend(jumpLink);
        }
        newMainContent.appendChild(subpart);
    });
    parent.insertBefore(newMainContent, mainContent);
    mainContent.remove()
}

function buildBtns(divType) {
    const btnDiv = document.createElement('div');
    btnDiv.className = 'btn-group display-flex flex-row flex-justify maxw-card';
    const btnTypes = ['Share', 'Copy', 'Print'];
    btnTypes.forEach(btnType => {
        const btn = document.createElement('a');
        btn.className = btnType + '-btn text-no-underline section-btn';
        btn.setAttribute('data-ga-event-name', btnType);
        btn.setAttribute('aria-label', btnType);
        btn.href = '#';
        if (btnType === 'Share') {
            btn.innerHTML = '<span class="copied-link text-no-underline" style="display:none;">Copied share link</span><svg class="usa-icon share-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#share"></use></svg>';
            btn.addEventListener('click', (e) => { shareLink(e, divType) });
        } else if (btnType === 'Copy') {
            btn.innerHTML = '<span class="copied text-no-underline" style="display:none;">Copied text</span><svg class="usa-icon copy-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#content_copy"></use></svg>';
            btn.addEventListener('click', (e) => { copyText(e, divType) });
        } else if (btnType === 'Print') {
            btn.innerHTML = '<svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#print"></use></svg>';
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