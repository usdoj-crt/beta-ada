const textBestBetsTemplate = (content) => {
   return `
    <li class="padding-bottom-5 margin-top-4 usa-prose border-bottom-05 border-base-lightest">
      <b class="title"><a href="${content.url}">${content.title
    .replace(/\uE000/g, '<span class="bg-yellow">')
    .replace(/\uE001/g, "</span>")}</a></b>
      <div class="text-base"> ${content.url} </div>
      <div> ${content.description
        .replace(/\uE000/g, '<span class="bg-yellow">')
        .replace(/\uE001/g, "</span>")} </div>
    </li>
    `
}