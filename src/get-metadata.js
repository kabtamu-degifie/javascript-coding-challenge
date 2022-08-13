// Note: Please do not use JSDOM or any other external library/package (sorry)
/*
type Metadata = {
  url: string;
  siteName: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
};
*/

/**
 *
 * @param {object} document DOM object
 * @param {string} selector selector string
 * @returns {string} data from HTML <head> content
 */
function querySelector(document, selector) {
  if (document.querySelector(selector)) {
    if (selector.includes("keywords")) {
      return document
        .querySelector(selector)
        .getAttribute("content")
        .split(",");
    }
    return document.querySelector(selector).getAttribute("content");
  }

  return null;
}

/**
 * Gets the URL, site name, title, description, keywords, and author info out of the <head> meta tags from a given html string.
 * 1. Get the URL from the <meta property="og:url"> tag.
 * 2. Get the site name from the <meta property="og:site_name"> tag.
 * 3. Get the title from the the <title> tag.
 * 4. Get the description from the <meta property="og:description"> tag or the <meta name="description"> tag.
 * 5. Get the keywords from the <meta name="keywords"> tag and split them into an array.
 * 6. Get the author from the <meta name="author"> tag.
 * If any of the above tags are missing or if the values are empty, then the corresponding value will be null.
 * @param html The complete HTML document text to parse
 * @returns A Metadata object with data from the HTML <head>
 */
export default function getMetadata(html) {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");

  let title = null;
  const url = querySelector(document, "meta[property='og:url']");
  const siteName = querySelector(document, "meta[property='og:site_name']");
  const description =
    querySelector(document, "meta[property='og:description']") ||
    querySelector(document, "meta[name='description']");
  const author = querySelector(document, "meta[name='author']");
  let keywords = querySelector(document, "meta[name='keywords']");

  if (document.getElementsByTagName("title")[0]) {
    title = document.getElementsByTagName("title")[0].innerHTML;
  }

  if (keywords && keywords.every((keyword) => keyword.length === 0)) {
    keywords = [];
  }

  return { url, siteName, title, description, keywords, author };
}
