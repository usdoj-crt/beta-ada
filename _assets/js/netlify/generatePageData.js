import makeHTMLFromBodyContent from './makeHTMLFromBodyContent';
import getPreviewLink from './getPreviewLink';

export default function generatePageData(entry) {
  const title = entry.getIn(['data', 'title']);
  const previewLink = getPreviewLink(entry);
  const leadText = entry.getIn(['data', 'lead']);
  const rawBodyContent = entry.getIn(['data', 'body']);
  const publishDate = entry.getIn(['data', 'publish-date']);
  const updatedDate = entry.getIn(['data', 'updated-date']);
  const print = entry.getIn(['data', 'print']);
  const sideNavPDF = entry.getIn(['data', 'sidenav-pdf']);
  const relatedContent = entry.getIn(['data', 'related-content']);
  const variables = entry.get('data').toJS();
  const bodyContentsArr = makeHTMLFromBodyContent(rawBodyContent, variables);
  const pageData = {
    previewLink,
    title,
    leadText,
    body: bodyContentsArr,
    publishDate,
    updatedDate,
    print,
    pdf: sideNavPDF,
    relatedContent,
  };
  return pageData;
}
