import generatePageData from './generatePageData';
import makeTemplate from './makeTemplate';

const preview = createClass({
  render: function () {
    const pageData = generatePageData(this.props.entry);
    return makeTemplate(pageData);
  },
  });

const pages = ['topics', 'resources', 'law-and-regs', 'pages'];
pages.forEach((page) => CMS.registerPreviewTemplate(page, preview));
