export default function parseLawsAndRegs(mainContent) {
  const location = window.location.href;
  if (location.includes('SVGAnimatedString')) {
    history.back();
  }
  if (location.includes('SVGAnimatedString')) {
    setTimeout(() => parseLawsAndRegs(mainContent), 500);
    return;
  }
  if (!mainContent) return;

  const parent = mainContent.parentElement;
  const clone = mainContent.cloneNode(true);
  const contentNodes = Array.from(clone.childNodes);
  const subpartIndices = [0];
  const subparts = [createDiv('subpart')];
  let lastHeading = 0;
  let length = 1;
  const sections = contentNodes
    .map((node, i) => {
      const isInteractiveHeader = getIsInteractiveHeader(contentNodes, node, i);
      if (!isInteractiveHeader) return null;
      if (node.localName === 'h2') {
        const subpart = createDiv('subpart');
        subparts.push(subpart);
        subpartIndices.push(length);
      }
      const sectionText = contentNodes
        .slice(lastHeading, i)
        .map((node) => node.outerHTML)
        .join(' ');
      lastHeading = i;
      length++;
      const section = createDiv('section');
      section.innerHTML = sectionText.trim();
      return section;
    })
    .filter((section) => !!section);

  let currentSubpart = subparts[0];
  sections.forEach((section, i) => {
    currentSubpart = subpartIndices.includes(i)
      ? subparts[subpartIndices.indexOf(i)]
      : currentSubpart;
    if (i !== 0 && Array.from(section.childNodes).length >= 2 && !subpartIndices.includes(i)) {
      const btnDiv = buildBtns(i, '.section');
      section.firstChild.firstChild.after(btnDiv);
      const jumpLink = document.createElement('a');
      jumpLink.id = 'section' + i.toString();
      section.prepend(jumpLink);
    }
    const sectionWrapper = createDiv('section-wrapper');
    sectionWrapper.appendChild(section);
    currentSubpart.appendChild(sectionWrapper);
  });

  const newMainContent = buildMainContent(subparts);

  parent.insertBefore(newMainContent, mainContent);
  mainContent.remove();
  if (window.matchMedia('(max-width: 1023px)').matches) {
    setUpMobileSearch();
    return;
  }
  const searchBoxWrapper = document.querySelector('.desktop-search-box');
  const searchInput = searchBoxWrapper.querySelector('.searchbox');
  const searchGo = searchBoxWrapper.querySelector('.submit-search');
  const searchNav = searchBoxWrapper.querySelector('.result-nav');
  const searchBox = searchBoxWrapper.querySelector('.searchbox');
  setUpButtons(searchGo, searchNav, searchBox);
  searchInput.addEventListener('input', () => {
    initSearch(searchInput, searchBoxWrapper, searchGo, searchNav);
  });
}

function setUpMobileSearch() {
  const searchBoxWrapper = document.querySelector('.mobile-search-box');
  const searchInput = searchBoxWrapper.querySelector('.searchbox');
  const searchGo = searchBoxWrapper.querySelector('.submit-search');
  const searchNav = searchBoxWrapper.querySelector('.result-nav');
  const searchBox = searchBoxWrapper.querySelector('.searchbox');
  setUpButtons(searchGo, searchNav, searchBox);
  searchInput.addEventListener('keydown', (e) => {
    if (e.key != 'Tab') {
      openOverlay(searchBoxWrapper, searchInput);
    }
  });
  searchInput.addEventListener('click', () => {
    openOverlay(searchBoxWrapper, searchInput);
  });
  searchInput.addEventListener('input', () => {
    initSearch(searchInput, searchBoxWrapper, searchGo, searchNav);
  });
}

function openOverlay(searchBoxWrapper, searchInput) {
  if (searchBoxWrapper.classList.contains('visible')) return;
  searchBoxWrapper.classList.add('visible');
  searchInput.focus();
  let overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.classList.remove('display-none');
    return;
  }
  overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);
  overlay.addEventListener('click', () => {
    closeSearch(overlay, searchBoxWrapper, searchInput);
  });
}

function listenForInput(e, searchBoxWrapper) {
  if (e.key == 'Enter') {
    search(searchBoxWrapper);
  }
}

function initSearch(searchInput, searchBoxWrapper, searchGo, searchNav) {
  searchGo.classList.remove('display-none');
  searchNav.classList.add('display-none');
  if (searchGo.classList.contains('listening')) {
    return;
  }
  searchGo.classList.add('listening');
  searchInput.addEventListener('keydown', (e) => {
    listenForInput(e, searchBoxWrapper);
  });
  searchGo.addEventListener('click', () => {
    search(searchBoxWrapper);
  });
}

function closeSearch(overlay, searchBoxWrapper, searchInput) {
  const searchGo = searchBoxWrapper.querySelector('.submit-search');
  const searchNav = searchBoxWrapper.querySelector('.result-nav');
  const searchBox = searchBoxWrapper.querySelector('.searchbox');
  clearSearch(searchGo, searchNav, searchBox);
  searchGo.classList.remove('display-none');
  overlay.classList.add('display-none');
  searchBoxWrapper.classList.remove('visible');
  searchBoxWrapper.classList.remove('active');
  searchInput.value = '';
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    let newSection = section.cloneNode(true);
    newSection = removeHighlights(newSection);
    newSection.classList.remove('searched');
    section.parentNode.replaceChildren(newSection);
  });
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
  btnTypes.forEach((btnType) => {
    const btn = document.createElement('a');
    btn.className = btnType.toLowerCase() + '-btn text-no-underline section-btn';
    const gaEventName = 'data-ga-event-name="' + btnType + ' ' + divType + ' ' + i + '"';
    btn.setAttribute('aria-label', btnType);
    btn.setAttribute('role', 'button');
    btn.href = '#';
    if (btnType === 'Share') {
      btn.innerHTML = `
            <p class="copied-link text-no-underline margin-0" style="display:none;">Copied link</p>
            <svg title="Copy link"
                    ${gaEventName}
                    class="usa-icon share-icon usa-tooltip"
                    data-position="bottom"
                    focusable="false"
                    role="img">
                    <title>Copy link</title>
                    <use xlink:href="/assets/images/uswds/sprite.svg#link"></use>
                </svg>
            `;
      btn.addEventListener('click', (e) => {
        shareLink(e, divType);
      });
    } else if (btnType === 'Copy') {
      btn.innerHTML = `
              <p class="copied text-no-underline margin-0" style="display:none;">Copied text</p>
              <svg title="Copy text"
                    ${gaEventName}
                    class="usa-icon copy-icon usa-tooltip"
                    data-position="bottom"
                    focusable="false"
                    role="img">
                    <title>Copy text</title>
                    <use xlink:href="/assets/images/uswds/sprite.svg#content_copy">
                    </use>
                </svg>
            `;
      addCopyEventListeners(btn, divType);
    } else if (btnType === 'Print') {
      btn.innerHTML = `
                <svg
                    title="Print"
                    ${gaEventName}
                    class="usa-icon usa-tooltip"
                    data-position="bottom"
                    focusable="false" role="img">
                    <title>Print</title>
                    <use xlink:href="/assets/images/uswds/sprite.svg#print">
                    </use>
                </svg>
            `;
      addPrintEventListeners(btn, divType);
    }
    btnDiv.appendChild(btn);
  });
  return btnDiv;
}

function highlightText(e, divType) {
  const section = e.target.closest(divType);
  section.classList.add('highlight');
}

function unHighlightText(e, divType) {
  const section = e.target.closest(divType);
  section.classList.remove('highlight');
}

function openAccordions(section) {
  section.querySelectorAll('details').forEach((accordion) => {
    accordion.setAttribute('open', true);
  });
}

function closeAccordions(section) {
  section.querySelectorAll('details').forEach((accordion) => {
    accordion.removeAttribute('open');
  });
}

function copyText(e, divType) {
  e.preventDefault();
  const section = e.target.closest(divType);
  openAccordions(section);
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(section);
  selection.removeAllRanges();
  selection.addRange(range);
  // using deprecated execCommand function to maintain formatting lost when using navigate
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  closeAccordions(section);
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
  openAccordions(section);
  const winPrint = window.open(
    '',
    '',
    'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0'
  );
  winPrint.document.write(section.outerHTML);
  Array.from(winPrint.document.getElementsByClassName('btn-group')).forEach(
    (btnGroup) => (btnGroup.style.display = 'none')
  );
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

function addCopyEventListeners(btn, divType) {
  btn.addEventListener('click', (e) => {
    copyText(e, divType);
  });
  btn.addEventListener('mouseover', (e) => {
    highlightText(e, divType);
  });
  btn.addEventListener('mouseleave', (e) => {
    unHighlightText(e, divType);
  });
}

function addPrintEventListeners(btn, divType) {
  btn.addEventListener('click', (e) => {
    printText(e, divType);
  });
  btn.addEventListener('mouseover', (e) => {
    highlightText(e, divType);
  });
  btn.addEventListener('mouseleave', (e) => {
    unHighlightText(e, divType);
  });
}

function navResults(e, dir, prevBtn, nextBtn, searchNav) {
  e.preventDefault();
  const currentCount = searchNav.querySelector('.current');
  const totalCount = searchNav.querySelector('.total');
  const count = parseInt(currentCount.innerText);
  const total = parseInt(totalCount.innerText);
  const direction = dir === 'next' ? 1 : -1;
  const newCount = count + direction;
  const canGoNext = newCount <= total;
  const canGoPrev = newCount >= 1;
  nextBtn.classList.toggle('disabled', !canGoNext || newCount === total);
  prevBtn.classList.toggle('disabled', !canGoPrev || newCount === 1);
  nextBtn.setAttribute('tabIndex', !canGoNext || newCount === total ? -1 : 0);
  prevBtn.setAttribute('tabIndex', !canGoPrev || newCount === 1 ? -1 : 0);
  if (dir === 'next' && !canGoNext) return;
  if (dir !== 'next' && !canGoPrev) return;

  location.hash = '#inPageResult' + newCount;
  currentCount.innerText = newCount;
}

function gtag() {
  window.dataLayer = window.dataLayer || [];
  dataLayer.push(arguments);
}

function search(searchBoxWrapper) {
  const searchBox = searchBoxWrapper.querySelector('.searchbox');
  const overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.classList.add('display-none');
    searchBoxWrapper.classList.add('active');
    const closeSearchBtn = searchBoxWrapper.querySelector('#closeSearch');
    closeSearchBtn.addEventListener('click', () => {
      closeSearch(overlay, searchBoxWrapper, searchBox);
    });
  }
  const searchNav = searchBoxWrapper.querySelector('.result-nav');
  const resultNumber = searchNav.querySelector('.result-number');
  const totalCount = resultNumber.querySelector('.total');
  const currentCount = resultNumber.querySelector('.current');
  const searchGo = searchBoxWrapper.querySelector('.submit-search');
  const searchQuery = searchBox.value.toLowerCase();
  if (!searchQuery.length) {
    clearSearch(searchGo, searchNav, searchBox);
    return;
  }
  gtag('event', 'view_search_results', { event_name: `in page search ${searchQuery}` });
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    let newSection = section.cloneNode(true);
    newSection = removeHighlights(newSection);
    newSection = updateSection(newSection, searchQuery);
    section.parentNode.replaceChildren(newSection);
  });
  const results = document.querySelectorAll('.search-term');
  if (results.length === 0) {
    searchNav.classList.add('display-none');
    searchGo.classList.remove('display-none');
    return;
  }

  results.forEach((result, i) => {
    const count = i + 1;
    result.id = 'inPageResult' + count;
    result.addEventListener('keydown', (e) => goToNextResult(e, count, currentCount));
  });
  searchGo.classList.add('display-none');
  searchNav.classList.remove('display-none');
  totalCount.innerText = results.length;
  currentCount.innerText = '1';
  resultNumber.setAttribute('aria-label', results.length + ' in page search results');
  resultNumber.focus();
  location.hash = '#inPageResult1';
}

function goToNextResult(e, count, currentCount) {
  if (e.key != 'Enter') return;
  const id = '#inPageResult' + (count + 1);
  currentCount.innerText = count + 1;
  location.hash = id;
}

function highlightTerm(text, section) {
  const newText = text.replaceAll('(', '(').replaceAll(')', ')');
  const innerHTML = section.innerHTML.replaceAll(
    new RegExp('(' + newText + ')', 'ig'),
    `<span class='search-term' tabindex='0'>$1</span>`
  );
  section.innerHTML = innerHTML;
  const shareBtn = section.querySelector('.share-btn');
  shareBtn.addEventListener('click', (e) => {
    shareLink(e, '.section');
  });
  const copyBtn = section.querySelector('.copy-btn');
  addCopyEventListeners(copyBtn, '.section');
  const printBtn = section.querySelector('.print-btn');
  addPrintEventListeners(printBtn, '.section');
}

function removeHighlights(section) {
  const results = section.querySelectorAll('.search-term');
  results.forEach((result) => {
    result.removeAttribute('id');
  });
  const innerHTML = section.innerHTML
    .replaceAll('<span class="search-term" tabindex="0">', '')
    .replaceAll('</span>', '');
  section.innerHTML = innerHTML;
  return section;
}

function updateSection(section, searchQuery) {
  if (section.innerText.toLowerCase().includes(searchQuery)) {
    section.classList.add('searched');
    const detailEls = section.querySelectorAll('details');
    detailEls.forEach((detailEl) => detailEl.setAttribute('open', true));
    highlightTerm(searchQuery, section);
  } else {
    section.classList.remove('searched');
    const detailEls = section.querySelectorAll('details');
    detailEls.forEach((detailEl) => detailEl.removeAttribute('open'));
  }
  return section;
}

function setUpButtons(searchGo, searchNav, searchBox) {
  const nextButton = searchNav.querySelector('.next-result');
  const prevButton = searchNav.querySelector('.prev-result');
  const clearButton = searchNav.querySelector('.clear');
  prevButton.addEventListener('click', (e) =>
    navResults(e, 'prev', prevButton, nextButton, searchNav)
  );
  nextButton.addEventListener('click', (e) =>
    navResults(e, 'next', prevButton, nextButton, searchNav)
  );
  clearButton.addEventListener('click', (e) => clearSearch(searchGo, searchNav, searchBox, e));
}

function clearSearch(searchGo, searchNav, searchBox, e = null) {
  if (e) {
    e.preventDefault();
    searchBox.focus();
  }
  const sections = document.querySelectorAll('.section');
  searchGo.classList.add('display-none');
  searchNav.classList.add('display-none');
  searchBox.value = '';
  const resultNumber = searchNav.querySelector('.result-number');
  resultNumber.ariaLabel = 'number of in page search results';
  sections.forEach((section) => {
    let newSection = section.cloneNode(true);
    newSection = removeHighlights(newSection);
    newSection.classList.remove('searched');
    section.parentNode.replaceChildren(newSection);
  });
  location.hash = '#';
}
