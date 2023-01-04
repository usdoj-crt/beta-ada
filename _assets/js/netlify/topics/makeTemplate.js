import generateChildElements from './generateChildElements';
import formatDates from './formatDates';

const makeTemplate = (data) => {
  const { title, leadText, body, publishDate, updatedDate, print, pdf, relatedContent } = data;
  return h(
    'div',
    {
      id: 'crt-page--content',
      className: 'mobile-lg:grid-col tablet:grid-col-12 desktop:grid-col-8',
    },
    h('h1', {}, title),
    h(
      'div',
      { className: 'measure-6' },
      h('div', { className: 'crt-lead' }, h('p', {}, leadText)),
      h(
        'div',
        {
          id: 'crt-page--printbutton--wrapper',
          className: 'desktop:margin-top-3 margin-bottom-2 width-card',
        },
        print
          ? h('button', { id: 'crt-page--printbutton', className: 'usa-button' }, 'Print this page')
          : null
      ),
      h(
        'div',
        { className: 'mobile:margin-bottom-4 margin-bottom-2 width-card' },
        pdf
          ? h(
              'a',
              { className: 'usa-button crt-page--downloadpdf-button text-bold' },
              'Download PDF Guidance'
            )
          : null
      ),
      h('p', {}, h('time', {}, publishDate ? formatDates(publishDate) : null)),
      h('p', {}, h('time', {}, updatedDate ? `Last updated: ${formatDates(updatedDate)}` : null)),
      generateChildElements(body),
      h('div', {'className': relatedContent ? 'usa-summary-box related-content-container border-0 padding-2 bg-primary-lighter': ""}, relatedContent ? h('h3', {'className': 'usa-summary-box__heading', 'id':'related-content-header'}, "Related Content"): null, relatedContent ? h('div', {'className':"usa-summary-box__text"}, 'Related content tags'): null)
    )
  );
};

export default makeTemplate;
