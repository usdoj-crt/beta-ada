// Change the state of the details elements:
const openDetails = (detail) => {
    detail.setAttribute('open', 'open');
    detail.setAttribute('data-detail-open', 'true');
  }
  
  const closeDetails = (detail) => {
    detail.removeAttribute('open');
    detail.setAttribute('data-detail-open', 'false');
  }

export {openDetails, closeDetails};