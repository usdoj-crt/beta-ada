import makeHTMLFromBodyContent from "./makeHTMLFromBodyContent";
import makeTemplate from "./makeTemplate";

let preview = createClass({
    render: async function () {
      const entry = this.props.entry;
      const title = entry.getIn(['data', 'title']);
      const leadText = entry.getIn(['data', 'lead']);
      const rawBodyContent = entry.getIn(['data', 'body']);
      const publishDate = entry.getIn(['data', 'publish-date']);
      const updatedDate = entry.getIn(['data', 'updated-date']);
      const print = entry.getIn(['data', 'print']);
      const sideNavPDF = entry.getIn(['data', 'sidenav-pdf']);
      const relatedContent = entry.getIn(['data', 'related-content']);
      const bodyContentsArr = await makeHTMLFromBodyContent(rawBodyContent);
      const pageData = {
        title,
        leadText,
        body: bodyContentsArr,
        publishDate,
        updatedDate,
        print,
        pdf: sideNavPDF,
        relatedContent,
      }
      return makeTemplate(pageData);
    },
  });
  const pages = [
    'topics',
    'resources',
    'law-and-regs',
    'pages'
  ];
  pages.forEach(page => CMS.registerPreviewTemplate(page, preview));
