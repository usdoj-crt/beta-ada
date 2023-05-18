import generatePageData from './generatePageData';
import makeTemplate from './makeTemplate';
import makeError from './makeError';
import loadSiteData from './loadSiteData';

const preview = createClass({
  render: function () {
    try {
      const pageData = generatePageData(this.props.entry);
      return makeTemplate(pageData);
    } catch (error) {
      return makeError(error);
    }
  },
  });

await loadSiteData();

const pages = [
  'index',
  'topics',
  'resources',
  'law-and-regs',
  'pages',
  'design-standards',
  'notices-posts',
  'es',
];
pages.forEach((page) => CMS.registerPreviewTemplate(page, preview));
