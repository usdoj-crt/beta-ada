import makeBodyContent from "./makeBodyContent";
import makeTemplate from "./makeTemplate";

let preview = createClass({
    render: function () {
      const entry = this.props.entry;
      const title = entry.getIn(['data', 'title']);
      const leadText = entry.getIn(['data', 'lead']);
      const rawBodyContent = entry.getIn(['data', 'body']);
      const bodyContentsArr = makeBodyContent(rawBodyContent);
      const publishDate = entry.getIn(['data', 'publish-date']);
      const updatedDate = entry.getIn(['data', 'updated-date']);
      const print = entry.getIn(['data', 'print']);
      const sideNavPDF = entry.getIn(['data', 'sidenav-pdf']);
      const relatedContent = entry.getIn(['data', 'related-content']);
      const pageData = {
        title: title,
        leadText: leadText,
        body: bodyContentsArr,
        publishDate: publishDate,
        updatedDate: updatedDate,
        print: print,
        pdf: sideNavPDF,
        relatedContent: relatedContent,
      }
      return makeTemplate(pageData);
    },
  });

  CMS.registerPreviewTemplate('topics', preview);
  CMS.registerPreviewTemplate('resources', preview);
  CMS.registerPreviewTemplate('resources', preview);
  CMS.registerPreviewTemplate('law-and-regs', preview);
  CMS.registerPreviewTemplate('pages', preview);