/**
 * This file handles redirects from ada.gov paths to archived content.
 *
 * See make_redirects.rb for a way to generate the generated_redirects.js
 *
 * Note that this file should only contain non-html content (pdfs, docx, etc).
 * HTML is better redirected using entries in manual_redirects.json
 */
export default {
  // Add entries below to manually redirect content.
  //
  // Entries should take the form of:
  //   "/path/to/from.pdf": "https://archive.ada.gov/path/to/to.pdf",
  //
  // or, to explicitly cancel a generated redirect, use:
  //   "/path/to/from.pdf": null,
};
