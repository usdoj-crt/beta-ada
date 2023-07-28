export default function parseLawsAndRegs () {
    const parser = new DOMParser();
    const headingElements = ['h2', 'h3', 'h4', 'h5', 'strong'];
    const lawElement = document.getElementsByClassName('measure-6')[0];
    const lawText = lawElement.innerHTML.toString();
    const parent = lawElement.parentElement;
    lawElement.remove()
    const htmlDoc = parser.parseFromString(lawText, 'text/html');
    const elementsArray = Array.from(htmlDoc.children[0].children[1].childNodes);
    const sections = [];
    let prevHeading = 0;
    elementsArray.forEach((element, i) => {
        if (!(headingElements.includes(element.localName)
            || (element.localName === 'p' && element.firstChild.localName === 'strong')
            || i === elementsArray.length -1)) return;
        const sliced = elementsArray.slice(prevHeading, i - 1);
        const slicedString = sliced.map(element => element.outerHTML).join(' ');
        sections.push(slicedString);
        prevHeading = i;
    });

    sections.forEach((section, i) => {
        const div = document.createElement('div');
        div.className = i === 0 ? 'intro-section' : 'body-section';
        div.innerHTML = section.trim();
        if (i !== 0 && Array.from(div.childNodes).length >= 1) {
            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'btn-group';
            const copyButton = document.createElement('a');
            copyButton.className = 'copy-btn';
            copyButton.href = '#';
            copyButton.innerHTML = '<svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#content_copy"></use></svg>';
            copyButton.addEventListener('click', copyText);
            buttonDiv.appendChild(copyButton);
            const printButton = document.createElement('a');
            printButton.className = 'print-btn';
            printButton.href = '#';
            printButton.innerHTML = '<svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#print"></use></svg>';
            printButton.addEventListener('click', printText);
            buttonDiv.appendChild(printButton);
            div.prepend(buttonDiv);
        }
        parent.appendChild(div);
    });
}

function copyText(e) {
    e.preventDefault();
    const section = e.target.parentElement.parentElement.parentElement;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents( section );
    selection.removeAllRanges();
    selection.addRange( range );
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    e.target.parentElement.outerHTML = '<span>Copied!</span>'
}

function printText(e) {
    e.preventDefault();
    const section = e.target.parentElement.parentElement.parentElement;
    const winPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    winPrint.document.write(section.outerHTML);
    winPrint.document.close();
    winPrint.focus();
    winPrint.print();
    winPrint.close();
}