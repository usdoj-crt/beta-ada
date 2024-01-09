// Insert word break opportunities into a URL following the Chicago Manual of Style
// @param {string} url A URL to format
// @return {string} A formatted URL
// @see {@link https://www.chicagomanualofstyle.org/book/ed17/part3/ch14/psec018.html Chicago Manual of Style 14.18}
// @see Turabian 2018, 20.4.2
// Adapted from: https://css-tricks.com/better-line-breaks-for-long-urls/

export default function wrapUrls(url) {
  // Split the URL into an array to distingish double slashes from single slashes
  const doubleSlash = url.split('//');
  // Format the strings on either side of double slashes separately
  const formatted = doubleSlash
    .map(function (str) {
      return (
        str
          .replace(/(?<after>:)/giu, '$1<wbr>')
          // Before a single slash, tilde, period, comma, hyphen, underline, question mark, number sign, or percent symbol
          .replace(/(?<before>[/~.,_?#%-])/giu, '<wbr>$1')
          // Before and after an equals sign or ampersand
          .replace(/(?<equals>=)/giu, '<wbr>$1<wbr>')
          .replace(/(?<ampersand>&amp;)/giu, '<wbr>&<wbr>')
      );
      // Reconnect the strings with word break opportunities after double slashes
    })
    .join('//<wbr>');
  return formatted;
}
