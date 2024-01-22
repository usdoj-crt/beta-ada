function getDescription(content) {
  if (content.searchgov_custom1) {
    const custom_description = content.searchgov_custom1[0].replace(',', ', ');
    return custom_description.charAt(0).toUpperCase() + custom_description.slice(1);
  }
  
  return content.snippet
    .replace(/\uE000/g, '<span class="bg-yellow">')
    .replace(/\uE001/g, '</span>');
}

export default function searchResultsTemplate(content) {
  const description = getDescription(content);
  return `
        <li class="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest">
        <b class="title"><a class='search-result' href="${content.url}">${content.title
    .replace(/\uE000/g, '<span class="bg-yellow">')
    .replace(/\uE001/g, '</span>')}</a></b>
      <div class="text-base content-url"> ${content.url} </div>
      <div> ${description} </div>
      </li>
`;
}
