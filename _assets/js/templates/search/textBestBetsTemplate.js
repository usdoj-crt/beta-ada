export default function textBestBetsTemplate(content) {
   return `
    <div class="padding-bottom-3 padding-top-2 usa-prose best-bet-item">
      <b class="title"><a href="${content.url}" class="best-bet" aria-label="best bet box">${content.title
    .replace(/\uE000/g, '')
    .replace(/\uE001/g, '')}</a></b>
      <div> ${content.description
        .replace(/\uE000/g, '')
        .replace(/\uE001/g, '')} </div>
    </div>
    `
}
