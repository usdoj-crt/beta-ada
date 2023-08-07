export default function parseLawsAndRegs (mainContent) {
    if (!mainContent) return;

    const headings = ['h2', 'h3', 'h4', 'h5', 'strong'];
    const parent = mainContent.parentElement;
    const newMainContent = document.createElement('div');
    newMainContent.className = 'interactive-headers';
    const clone = mainContent.cloneNode(true);
    const contentNodes = Array.from(clone.childNodes);
    const sections = [];
    let lastHeading = 0;

    contentNodes.map((node, i) => {
        if (!(headings.includes(node.localName)
            || i === contentNodes.length - 1)) return;
        const sectionText = contentNodes
            .slice(lastHeading, i)
            .map(node => node.outerHTML).join(' ');
        sections.push(sectionText);
        lastHeading = i;
    });

    sections.map((section, i) => {
        if (!section.length) return;
        const sectionContainer = document.createElement('div');
        sectionContainer.className = 'section';
        sectionContainer.innerHTML = section.trim();
        if (i === 0 || Array.from(sectionContainer.childNodes).length < 2) {
            newMainContent.appendChild(sectionContainer);
            return;
        }
        const btnDiv = buildBtns();
        sectionContainer.firstChild.after(btnDiv);
        const jumpLink = document.createElement('a');
        jumpLink.id = i.toString();
        sectionContainer.prepend(jumpLink);
        jumpLink.id = 'section' + i.toString();
        sectionContainer.prepend(jumpLink);
        newMainContent.appendChild(sectionContainer);
    });

    parent.insertBefore(newMainContent, mainContent);
    mainContent.remove()
}

function buildBtns() {
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
            btn.addEventListener('click', shareLink);
        } else if (btnType === 'Copy') {
            btn.innerHTML = '<span class="copied text-no-underline" style="display:none;">Copied text</span><svg class="usa-icon copy-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#content_copy"></use></svg>';
            btn.addEventListener('click', copyText);
        } else if (btnType === 'Print') {
            btn.innerHTML = '<svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#print"></use></svg>';
            btn.addEventListener('click', printText);
        }
        btnDiv.appendChild(btn);
    });
    return btnDiv;
}

function copyText(e) {
    e.preventDefault();
    const section = e.target.closest('.section');
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

function printText(e) {
    e.preventDefault();
    const section = e.target.closest('.section');
    const winPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    winPrint.document.write(section.outerHTML);
    winPrint.document.getElementsByClassName('btn-group')[0].style.display = 'none';
    winPrint.document.close();
    winPrint.focus();
    winPrint.print();
    winPrint.close();
}

function shareLink(e) {
    e.preventDefault();
    const section = e.target.closest('.section');
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
