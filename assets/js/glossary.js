const GLOSSARY = [
  {
    matches: ['Notice of Proposed Rulemaking (NPRM)', 'Notice of Proposed Rulemaking', 'NPRM'],
    definition: `
    <strong>NPRM</strong> (<em>Notice of Proposed Rulemaking</em>)
    <p>
      A Notice of Proposed Rulemaking (NPRM) is a notice published in the Federal Register that announces a proposed rule. The notice includes a summary of the proposed rule and a description of how the public can submit comments on the proposed rule. The public is usually given a certain amount of time to submit comments, which the agency must consider before finalizing the rule.
    </p>
    `,
  },
];

function highlightGlossaryTerms() {
  const flatGlossary = GLOSSARY.flatMap(({ matches, definition }) =>
    matches.map((match) => ({ match, definition }))
  );

  const toReplace = [];
  const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (textNodes.nextNode()) {
    const original = textNodes.currentNode;

    const glossaried = flatGlossary.reduce(
      (newNodes, { match, definition }) => {
        return newNodes.flatMap((node) => {
          if (node.nodeType !== Node.TEXT_NODE) return [node];
          if (!node.nodeValue.includes(match)) return [node];

          return node.nodeValue.split(match).flatMap((part, index, parts) => {
            console.log({ part });
            const glossaried = document.createElement('span');
            glossaried.innerText = match;
            glossaried.title = definition;
            glossaried.style.borderBottom = '1px dashed #000';

            const isLast = index === parts.length - 1;
            if (isLast) return [document.createTextNode(part)];

            if (part === '') return [glossaried];

            return [document.createTextNode(part), glossaried];
          });
        });
      },
      [original]
    );

    if (!glossaried.length) continue;
    toReplace.push({ original, glossaried });
  }

  toReplace.forEach(({ original, glossaried }) => {
    original.replaceWith(...glossaried);
  });
}

window.addEventListener('DOMContentLoaded', function () {
  highlightGlossaryTerms();
});
