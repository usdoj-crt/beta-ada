import generateChildElements from './generateChildElements';
import formatPublishDates from './formatPublishDates';

/** @jsx h */

function makeError(error) {
  return (
    <div
      id="crt-page--content"
      className="admin-error-conatiner mobile-lg:grid-col tablet:grid-col-12 desktop:grid-col-8"
    >
      <h1 className="admin-error-highlight">ADA.gov Admin Error</h1>
      <div className="measure-6">
        <div className="crt-lead">
          <p>Couldn't render the template:</p>
          <code>{error.name} ({error.message})</code>
          <p>Please edit the code on the left and try again</p>
          <p>Full details:</p>
          <code>{error.stack}</code>
        </div>


      </div>
    </div>
  );
};

export default makeError;
