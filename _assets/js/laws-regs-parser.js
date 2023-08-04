export default function parseLawsAndRegs () {
    const url = window.location.href;
    if (!url.includes('law-and-regs')) return;

    const mainEl = document.getElementsByClassName('measure-6')[0];
    if (!mainEl) return;

    const parser = new DOMParser();
    const headingEls = ['h2', 'h3', 'h4', 'h5', 'strong'];
    const content = mainEl.innerHTML.toString();
    const parent = mainEl.parentElement;
    const newMainEl = document.createElement('div');
    newMainEl.className = 'measure-6';
    mainEl.remove();
    const htmlDoc = parser.parseFromString(content, 'text/html');
    const elArr = Array.from(htmlDoc.children[0].children[1].childNodes);
    const sectionStrs = [];
    const subpartIndices = [];
    const subparts = [];
    let lastSectionHeading = 0;
    elArr.forEach((el, i) => {
        if (!(headingEls.includes(el.localName)
            || (el.localName === 'p' && el.firstChild.localName === 'strong')
            || i === elArr.length - 1)) return;
        if (el.localName === 'h2') {
            const subpart = document.createElement('div');
            subpart.className = 'subpart';
            subparts.push(subpart);
            subpartIndices.push(sectionStrs.length + 1);
        }
        const sectionStr = elArr
            .slice(lastSectionHeading, i === elArr.length - 1 ? i : i - 1)
            .map(el => el.outerHTML).join(' ');
        sectionStrs.push(sectionStr);
        lastSectionHeading = i;
    });

    let currentSubpart = subparts[0];
    sectionStrs.forEach((sectionStr, i) => {
        const section = document.createElement('div');
        section.className = i === 0 ? 'intro-section' : 'section';
        section.innerHTML = sectionStr.trim();
        if (subpartIndices.includes(i)) {
          currentSubpart = subparts[subpartIndices.indexOf(i)];
        } else if (i !== 0 && Array.from(section.childNodes).length >= 2) {
            const btnDiv = buildBtns('.section');
            section.firstChild.after(btnDiv);
            const jumpLink = document.createElement('a');
            jumpLink.id = 'section' + i.toString();
            section.prepend(jumpLink);
        }
        currentSubpart.appendChild(section);
    });

    subparts.forEach((subpart, i) => {
        if (i !== 0 && Array.from(subpart.childNodes).length >= 2) {
            const btnDiv = buildBtns('.subpart');
            subpart.prepend(btnDiv);
            const jumpLink = document.createElement('a');
            jumpLink.id = 'subpart' + i.toString();
            subpart.prepend(jumpLink);
        }
        newMainEl.appendChild(subpart);
    });
    parent.appendChild(newMainEl);
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
        btn.href = '#'
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
    winPrint.document.getElementsByClassName('btn-group')[0].style.display = 'none';
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