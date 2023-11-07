export default function totalResults(resultsTotal=0, type="results", query='') {
    const moreThanOne = `<p role="status" markdown="0" class="total-results margin-y-0">${resultsTotal} ${type}s found ${query}</p>`;
    const equalToOne = `<p role="status" markdown="0" class="total-results margin-y-0">${resultsTotal} ${type} found ${query}</p>`;
    const lessThanOne = `<p role="status" markdown="0" class="total-results margin-y-0">No ${type}s found ${query}</p>`;
    // Error message:
    const errorMessage = `<p role="status" markdown="0" class="total-results margin-y-0">Your search cannot be completed at this time. Please try again later.</p>`
    if (type === null) {
        type = 'results'
    }
    if (resultsTotal > 1) {
        return moreThanOne;
    }
    if (resultsTotal === 1) {
        return equalToOne;
    }
    if (resultsTotal === 0) {
        return lessThanOne;
    }
    if (resultsTotal === -1) {
        return errorMessage;
    }
}