export default function graphicBestBetsTemplate(content) {
    const links = content.links.map(link => {
        return `<a href="${link.url}" class="padding-right-3 grid-col-6 padding-bottom-2" aria-label="best bet box">${link.title}</a>`
    });
    return `
     <div class="padding-bottom-3 padding-top-2 usa-prose">
       <p class="font-body-lg"><b class="title">${content.title
     .replace(/\uE000/g, '')
     .replace(/\uE001/g, '')}</b></p>
     <div class="grid-row flex-wrap flex-justify-start">
       ${links.join(' ')}
       </div>
     </div>
     `
 }