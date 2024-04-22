const GLOSSARY = [
  {
    matches: ['Notice of Proposed Rulemaking', 'NPRM'],
    term: 'Notice of Proposed Rulemaking (NPRM)',
    definition: `A Notice of Proposed Rulemaking (NPRM) is a notice published in the Federal Register that announces a proposed rule.

The notice includes a summary of the proposed rule and a description of how the public can submit comments on the proposed rule. The public is usually given a certain amount of time to submit comments, which the agency must consider before finalizing the rule.`,
  },
  {
    matches: ['Fact Sheet'],
    term: 'Fact Sheet',
    definition: `A fact sheet is a document that provides an overview of a rule or policy. Fact sheets are often used to summarize complex information in a way that is easy to understand.`,
  },
  {
    matches: ['MDE', 'medical diagnostic equipment'],
    term: 'Medical Diagnostic Equipment (MDE)',
    definition: `Medical Diagnostic Equipment (MDE) is equipment used to diagnose, monitor, or treat patients. Examples of MDE include X-ray machines, ultrasound machines, and MRI machines.`,
  },
];

function showGlossaryDefinition(event, isSticky) {
  if (document.querySelector('.crt-glossary-popup.sticky') && !isSticky) return;

  document.querySelectorAll('.crt-glossary-popup').forEach((element) => element.remove());

  const definitionElement = document.createElement('div');
  definitionElement.classList.add('crt-glossary-popup');
  definitionElement.setAttribute('role', 'dialog');

  const close = document.createElement('button');
  close.innerText = 'close';
  close.classList.add('close');
  close.addEventListener('click', () => definitionElement.remove());
  definitionElement.appendChild(close);

  const header = document.createElement('h1');
  header.innerText = event.target.dataset.glossaryTerm;
  definitionElement.appendChild(header);

  const divider = document.createElement('div');
  divider.classList.add('crt-landing--separator_small');
  definitionElement.appendChild(divider);

  const definition = document.createElement('p');
  definition.innerText = event.target.dataset.glossaryDefinition;
  definitionElement.appendChild(definition);

  definitionElement.style.top = `${event.pageY}px`;
  definitionElement.style.left = `${event.pageX}px`;

  document.body.appendChild(definitionElement);

  if (isSticky) {
    definitionElement.classList.add('sticky');
  } else {
    event.target.addEventListener('mouseleave', () => {
      definitionElement.remove();
    });
  }
}

function highlightGlossaryTerms() {
  const flatGlossary = GLOSSARY.flatMap(({ matches, term, definition }) => {
    return matches.flatMap((match) => {
      return [
        { match, term, definition },
        { match: match.toLowerCase(), term, definition },
        { match: match.toUpperCase(), term, definition },
        { match: match.charAt(0).toUpperCase() + match.slice(1), term, definition },
      ];
    });
  });

  const toReplace = [];
  const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (textNodes.nextNode()) {
    const original = textNodes.currentNode;

    const glossaried = flatGlossary.reduce(
      (newNodes, { match, term, definition }) => {
        return newNodes.flatMap((node) => {
          if (node.nodeType !== Node.TEXT_NODE) return [node];
          if (!node.nodeValue.includes(match)) return [node];

          return node.nodeValue.split(match).flatMap((part, index, parts) => {
            const glossaried = document.createElement('span');
            glossaried.setAttribute('role', 'button');
            glossaried.setAttribute('tabindex', '0');
            glossaried.innerText = match;
            glossaried.dataset.glossaryDefinition = definition;
            glossaried.dataset.glossaryTerm = term;
            glossaried.classList.add('crt-glossary-term');
            glossaried.addEventListener('mouseenter', (event) => showGlossaryDefinition(event));
            glossaried.addEventListener('click', (event) => showGlossaryDefinition(event, true));

            const isLast = index === parts.length - 1;
            if (isLast) return [document.createTextNode(part)];

            if (part === '') return [glossaried];

            return [document.createTextNode(part), glossaried];
          });
        });
      },
      [original],
    );

    if (!glossaried.length) continue;
    toReplace.push({ original, glossaried });
  }

  toReplace.forEach(({ original, glossaried }) => {
    original.replaceWith(...glossaried);
  });
}

export default function setupGlossary() {
  highlightGlossaryTerms();
}
