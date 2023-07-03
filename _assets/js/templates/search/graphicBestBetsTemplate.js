export default function graphicBestBetsTemplate(content) {
    const links = content.links.map(link => {
        return `<a href="${link.url}" class="padding-right-2" aria-label="best bet box">${link.title}</a>`
    });
    return `
     <div class="padding-bottom-3 padding-top-2 usa-prose best-bet-item">
       <p class="font-body-lg"><b class="title"><a href="${content.title_url}" class="best-bet" aria-label="best bet box">${content.title
     .replace(/\uE000/g, '')
     .replace(/\uE001/g, '')}</a></b></p>
     <div class="grid-row flex-wrap flex-justify-start">
       ${links.join(' ')}
       </div>
     </div>
     `
 }