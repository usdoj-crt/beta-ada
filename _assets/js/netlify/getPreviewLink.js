export default function getPreviewLink(entry) {
    let link;
    const card = entry.getIn(['data', 'card']);
    if (card) {
        link = card.get('href');
    } else {
        link = entry.getIn(['data', 'permalink']);
    }
    const status = entry.get('status');

    if (status === '') {
        return null;
    }

    return 'https://federalist-1716bf9c-dd79-4d96-8285-6e56dc391b84.app.cloud.gov/preview/usdoj-crt/beta-ada/cms'.concat(link);
}
