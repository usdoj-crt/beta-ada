import generateChildElements from './generateChildElements';
import formatPublishDates from './formatPublishDates';

/** @jsx h */

function makeTemplate(data) {
  const { title, leadText, body, publishDate, updatedDate, print, pdf, relatedContent } = data;
  const pageTemplate = (
    <div
      id="crt-page--content"
      className="mobile-lg:grid-col tablet:grid-col-12 desktop:grid-col-8"
    >
      <h1>{title}</h1>
      <div className="measure-6">
        <div className="crt-lead">
          <p>{leadText}</p>
          <div
            id="crt-page--printbutton--wrapper"
            className="desktop:margin-top-3 margin-bottom-2 width-card"
          >
            {print ? (
              <button id="crt-page--printbutton" className="usa-button">
                Print this page
              </button>
            ) : null}
          </div>
          <div className="mobile:margin-bottom-4 margin-bottom-2 width-card">
            {pdf ? (
              <a className="usa-button crt-page--downloadpdf-button text-bold">
                Download PDF Guidance
              </a>
            ) : null}
          </div>
        </div>
        {publishDate ? (
          <p>
            {' '}
            <time>{formatPublishDates(publishDate)}</time>{' '}
          </p>
        ) : null}
        {updatedDate ? (
          <p>
            {' '}
            <time> `Last updated:{formatPublishDates(updatedDate)}</time>{' '}
          </p>
        ) : null}
        {generateChildElements(body)}
        {relatedContent ? (
          <div className="usa-summary-box related-content-container border-0 padding-2 bg-primary-lighter">
            {' '}
            <h3 className="usa-summary-box__heading" id="related-content-header">
              Related Content
            </h3>{' '}
            <div className="usa-summary-box__text">Related content tags</div>
          </div>
        ) : null}
      </div>
    </div>
  );
  return pageTemplate;
};

export default makeTemplate;
