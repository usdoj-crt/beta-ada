export default function totalResults(resultsTotal, type) {
    if (resultsTotal > 1) {
        return `<div markdown="0" role="status" class="text-black">${resultsTotal} ${type}s found</div>`
    } else if (resultsTotal === 1) {
        return `<div markdown="0" role="status" class="text-black">${resultsTotal} ${type} found</div>`
    } else if (resultsTotal < 1) {
        return `<div markdown="0" role="status" class="text-black">No ${type}s found</div>`
    }
}
