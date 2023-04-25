const URL = 'https://federalist-1716bf9c-dd79-4d96-8285-6e56dc391b84.app.cloud.gov/preview/usdoj-crt/beta-ada/cms';
export default function getPreviewLink(entry) {
    if (entry.get('status') === '') return null;
    const card = entry.getIn(['data', 'card']);
    if (card) return URL + card.get('href');
        
    const permalink = entry.getIn(['data', 'permalink'])
    if (permalink) return URL + permalink;
      
    console.error('Unable to build Pages preview link from entry', entry);
    return null;
}
