export default function totalResults(resultsTotal=0, type="results") {
    const moreThanOne = `<p role="status" markdown="0" class="total-results margin-y-0">${resultsTotal} ${type}s found</p>`;
    const equalToOne = `<p role="status" markdown="0" class="total-results margin-y-0">${resultsTotal} ${type} found</p>`;
    const lessThanOne = `<p role="status" markdown="0" class="total-results margin-y-0">No ${type}s found</p>`;
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
