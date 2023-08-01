export default function parseLawsAndRegs () {
    const url = window.location.href;
    if (!url.includes('law-and-regs')) return;

    const mainEl = document.getElementsByClassName('measure-6')[0];
    if (!mainEl) return;

    const parser = new DOMParser();
    const headingEls = ['h3', 'h4', 'h5', 'strong'];
    const content = mainEl.innerHTML.toString();
    const parent = mainEl.parentElement;
    const newMainEl = document.createElement('div');
    newMainEl.className = 'measure-6';
    mainEl.remove();
    const htmlDoc = parser.parseFromString(content, 'text/html');
    const elArr = Array.from(htmlDoc.children[0].children[1].childNodes);
    const sectionStrs = [];
    let lastHeading = 0;

    elArr.forEach((el, i) => {
        if (!(headingEls.includes(el.localName)
            || (el.localName === 'p' && el.firstChild.localName === 'strong')
            || i === elArr.length - 1)) return;
        const sliceStr = elArr
            .slice(lastHeading, i === elArr.length - 1 ? i : i - 1)
            .map(element => element.outerHTML).join(' ');
        sectionStrs.push(sliceStr);
        lastHeading = i;
    });

    sectionStrs.forEach((section, i) => {
        const div = document.createElement('div');
        div.className = i === 0 ? 'intro-section' : 'section';
        div.innerHTML = section.trim();
        if (i !== 0 && Array.from(div.childNodes).length >= 2) {
            const btnDiv = buildBtns();
            div.firstChild.after(btnDiv);
            const jumpLink = document.createElement('a');
            const id = div.firstChild.textContent.split(' ').join('').substring(0, 20);
            jumpLink.id = id;
            div.prepend(jumpLink);
        }
        newMainEl.appendChild(div);
    });

    parent.appendChild(newMainEl);
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
        btn.href = '#'
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