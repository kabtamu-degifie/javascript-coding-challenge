/*
type Metadata = {
  url: string | null;
  siteName: string | null;
  title: string | null;
  description: string | null;
  keywords: string[] | null;
  author: string | null;
};
*/

/**
 *
 * @param {Metadata} md - Metadata object
 * @param {string} query - The search query string
 * @returns {boolean[]} - An array of boolean
 */
function searchBy(md, query) {
  const facts = [];
  Object.keys(md).forEach((key) => {
    if (!Array.isArray(md[key])) {
      facts.push(
        md[key]?.toLowerCase()?.includes(query) ||
          md[key]?.toLowerCase()?.replace(/\./g, "")?.includes(query)
      );
    } else {
      facts.push(
        md[key].includes(query) ||
          md[key].filter((keyword) => query.includes(keyword)).length > 0
      );
    }
  });
  return facts.some((element) => element);
}

/**
 *
 * @param {Metadata[]} metadata - An array of Metadata objects
 * @param {string || string[]} query - The search query string or an array of string
 * @returns {Metadata[]} - An array of Metadata objects that match the given search query
 */
function search(metadata, query) {
  // query params: multiple words
  if (Array.isArray(query)) {
    const results = [];
    Object.keys(query).forEach((key) => {
      const filteredMd = metadata.filter((md) => {
        const newQuery = query[key]?.toLowerCase();
        return searchBy(md, newQuery);
      });

      if (filteredMd.length !== 0) {
        results.push(...filteredMd);
      }
    });
    return Array.from(new Set(results));
  }

  // query params : single word
  // or with special character
  return metadata.filter((md) => {
    const newQuery = query?.toLowerCase();
    return (
      searchBy(md, newQuery) ||
      (newQuery?.includes(".") && searchBy(md, newQuery?.replace(/\./g, ""))) ||
      (newQuery?.includes("-") && searchBy(md, newQuery?.replace(/-/g, "")))
    );
  });
}

/**
 * Filters the given Metadata array to only include the objects that match the given search query.
 * If the search query has multiple words,
 * treat each word as a separate search term to filter by,
 * in addition to gathering results from the overall query.
 * If the search query has special characters,
 * run the query filter with the special characters removed.
 * Can return an empty array if no Metadata objects match the search query.
 * @param {Metadata[]} metadata - An array of Metadata objects
 * @param {string} query - The search query string
 * @returns {Metadata[]} - An array of Metadata objects that match the given search query
 */
export default function filterMetadata(metadata, query) {
  /**
   * If metadata and query are null or undefined
   * or  metadata and query are empty
   * or metadata is not type of array and quer is not a type of string
   */
  if (
    (!metadata && !query) ||
    (query.length === 0 && metadata.length === 0) ||
    (!Array.isArray(metadata) && typeof query !== "string")
  ) {
    return [];
  }

  // multiple words: comma separated
  if (query.includes(",")) {
    return search(metadata, query.split(","));
  }

  // multiple words: space separated
  if (query.includes(" ")) {
    return search(metadata, query.split(" "));
  }
  // single word
  return search(metadata, query);
}
