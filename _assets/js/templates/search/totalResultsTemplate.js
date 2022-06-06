export default function totalResults(resultsTotal=0, type="results") {
    const moreThanOne = `<div markdown="0" role="status"><p class="total-results margin-y-0">${resultsTotal} ${type}s found</p></div>`;
    const equalToOne = `<div markdown="0" role="status"><p class="total-results margin-y-0">${resultsTotal} ${type} found</p></div>`;
    const lessThanOne = `<div markdown="0" role="status"><p class="total-results margin-y-0">No ${type}s found</p></div>`;
    if (type === null) {
        type = 'results'
    }
    if (resultsTotal > 1) {
        return moreThanOne;
    } 
    if (resultsTotal === 1) {
        return equalToOne;
    } 
    if (resultsTotal < 1) {
        return lessThanOne;
    }
    if (resultsTotal === null) {
        return lessThanOne;
    }
}
