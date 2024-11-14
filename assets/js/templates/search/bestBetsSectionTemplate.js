export default function bestBetsSectionTemplate(content) {
  return `
     <div class="padding-bottom-1 padding-top-4 usa-prose border-top-2px border-bottom-2px border-primary margin-top-5">
     <p markdown="0" class="total-results">Recommended by ADA.gov</p>
        <div class="grid-row flex-wrap flex-justify ${
          content.length === 1 ? 'single-result' : null
        }">
        ${content.join('')}
        </div>
     </div>
     `;
}
