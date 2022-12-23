import makeBodyContent from "./makeBodyContent";
import makeTemplate from "./makeTemplate";

let TopicsPreview = createClass({
    render: function () {
      let entry = this.props.entry;
      let title = entry.getIn(['data', 'title']);
      let leadText = entry.getIn(['data', 'lead']);
      let rawBodyContent = entry.getIn(['data', 'body']);
      let bodyContentsArr = makeBodyContent(rawBodyContent);
      return makeTemplate(title, leadText, bodyContentsArr);
    },
  });

  CMS.registerPreviewTemplate('topics', TopicsPreview);