import filterMetadata from "./filter-metadata";

const exampleMetadata1 = {
  url: "https://www.spencergreenberg.com/2021/11/human-behavior-makes-more-sense-when-you-understand-anchor-beliefs/",
  title:
    'Human behavior makes more sense when you understand "Anchor Beliefs" - Spencer Greenberg',
  description:
    "There's an important type of belief most of us have, which we call anchor beliefs",
  keywords: ["beliefs", "behavior"],
  author: "Spencer Greenberg",
  siteName: "Spencer Greenberg",
};
const exampleMetadata2 = {
  url: "https://www.example.com/something/gonna-test",
  title: "Example Title",
  description: "Example description.",
  keywords: ["example", "keywords"],
  author: "Example Author",
  siteName: "Example Site Name",
};
const exampleMetadata3 = {
  url: "https://www.google.com/",
  title: "Google",
  description: "This is Google, yo.",
  keywords: ["google", "keywords", "search"],
  author: null,
  siteName: "Google",
};
const exampleMetadata4 = {
  url: "https://www.internet.net/welcome-to-the-internet/",
  title: "The Internet",
  description: null,
  keywords: ["monkey"],
  author: null,
  siteName: null,
};
const exampleMetadata5 = {
  url: null,
  title: "Monkey",
  description: "Welcome to this site about chimps and stuff.",
  keywords: null,
  author: null,
  siteName: null,
};
const metadataArray = [
  exampleMetadata1,
  exampleMetadata2,
  exampleMetadata3,
  exampleMetadata4,
  exampleMetadata5,
];
const nullMetadata = {
  url: null,
  title: null,
  description: null,
  keywords: null,
  author: null,
  siteName: null,
};
const specialCharacterEx1 = {
  ...nullMetadata,
  // well-being
  description: "well-being",
};
const specialCharacterEx2 = {
  ...nullMetadata,
  // light-year
  keywords: ["light"],
};
const specialCharacterEx3 = {
  ...nullMetadata,
  // light-year
  siteName: "Lightyear",
};
const specialCharacterEx4 = {
  ...nullMetadata,
  // N.A.S.A. --> nasa
  url: "https://www.nasa.gov/",
};
const specialCharacterEx5 = {
  ...nullMetadata,
  // ADHD --> A.D.H.D.
  title: "A.D.H.D. - Attention Deficit Hyperactivity Disorder",
};
const mdSpecialCharactersArray = [
  specialCharacterEx1,
  specialCharacterEx2,
  specialCharacterEx3,
  specialCharacterEx4,
  specialCharacterEx5,
];

// Check if both metadata arrays have the same elements but in a any order
function metadataArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((md1) => arr2.some((md2) => md1.url === md2.url));
}

describe("filter-metadata.js - filterMetadata()", () => {
  test("Basic, generic, typical usage", () => {
    expect(filterMetadata(metadataArray, "description")).toEqual([
      exampleMetadata2,
    ]);
  });
  test("Case insensitive", () => {
    expect(filterMetadata(metadataArray, "DESCRIPTION")).toEqual([
      exampleMetadata2,
    ]);
  });
  test("Check keywords", () => {
    expect(
      metadataArraysEqual(filterMetadata(metadataArray, "monkey"), [
        exampleMetadata4,
        exampleMetadata5,
      ])
    ).toBe(true);
  });
  test("Check URL", () => {
    expect(
      metadataArraysEqual(filterMetadata(metadataArray, "Welcome"), [
        exampleMetadata4,
        exampleMetadata5,
      ])
    ).toBe(true);
  });
  test("Multiple words", () => {
    expect(
      metadataArraysEqual(filterMetadata(metadataArray, "WELCOME INTERNET"), [
        exampleMetadata4,
        exampleMetadata5,
      ])
    ).toBe(true);
  });
  test("Multiple words: 3 results", () => {
    expect(
      metadataArraysEqual(
        filterMetadata(metadataArray, "SpencerGreenberg chimps search"),
        [exampleMetadata1, exampleMetadata3, exampleMetadata5]
      )
    ).toBe(true);
  });
  test("Multiple words, comma separated", () => {
    expect(
      metadataArraysEqual(filterMetadata(metadataArray, "call, my, name"), [
        exampleMetadata1,
        exampleMetadata2,
      ])
    ).toBe(true);
  });
  test("Hypenated word: direct match", () => {
    expect(filterMetadata(mdSpecialCharactersArray, "well-being")).toEqual([
      specialCharacterEx1,
    ]);
  });
  test("Hypenated word: without hypen match", () => {
    expect(
      metadataArraysEqual(
        filterMetadata(mdSpecialCharactersArray, "light-year"),
        [specialCharacterEx2, specialCharacterEx3]
      )
    ).toBe(true);
  });
  test("Acronym: remove query periods", () => {
    expect(filterMetadata(mdSpecialCharactersArray, "N.A.S.A.")).toEqual([
      specialCharacterEx4,
    ]);
  });
  test("Acronym: remove metadata periods", () => {
    expect(filterMetadata(mdSpecialCharactersArray, "ADHD")).toEqual([
      specialCharacterEx5,
    ]);
  });
  test("Acronym: exact match", () => {
    expect(filterMetadata(mdSpecialCharactersArray, "A.D.H.D.")).toEqual([
      specialCharacterEx5,
    ]);
  });
  test("No params", () => {
    expect(filterMetadata()).toEqual([]);
  });
  test("No search query", () => {
    expect(filterMetadata(metadataArray, "")).toEqual(metadataArray);
  });
  test("Nothing present", () => {
    expect(filterMetadata([], "")).toEqual([]);
  });
  test("Null parameters", () => {
    expect(filterMetadata(null, null)).toEqual([]);
  });
  test("Undefined parameters", () => {
    expect(filterMetadata(undefined, undefined)).toEqual([]);
  });
  test("Incorrect parameter types", () => {
    expect(filterMetadata("oops", [1])).toEqual([]);
  });
});
