/**
 * This file handles redirects from ada.gov paths to archived content.
 *
 * See make_redirects.rb for a way to generate the generated.redirects.js
 *
 * Note that this file should only contain non-html content (pdfs, docx, etc).
 * HTML is better redirected using entries in manual.redirects.json
 */
import * as generated from './generated.redirects.js'

export default {
  ...generated,
  // Add entries below to manually redirect content.
  // Entries should take the form of:
  // "/path/to/from.pdf": "https://archive.ada.gov/path/to/to.pdf",
};
