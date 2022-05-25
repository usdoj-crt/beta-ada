export default function totalResults(resultsTotal, type) {
    if (resultsTotal > 1) {
        return `<div markdown="0" role="status"><p class="total-results margin-y-0">${resultsTotal} ${type}s found</p></div>`
    } else if (resultsTotal === 1) {
        return `<div markdown="0" role="status"><p class="total-results margin-y-0">${resultsTotal} ${type} found</p></div>`
    } else if (resultsTotal < 1) {
        return `<div markdown="0" role="status"><p class="total-results margin-y-0">No ${type}s found</p></div>`
    }
}
