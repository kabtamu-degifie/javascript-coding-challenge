import getMetadata from "./get-metadata";

const htmlExBasic = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="applicable-device" content="pc,mobile">
    <meta name="access" content="Yes">
    <meta name="twitter:site" content="@SpringerLink">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="The Relationship Between Prosociality, Meaning, and Happiness in Everyday Life">
    <meta name="twitter:description" content="Journal of Happiness Studies - Prosocial behaviors benefit others, but what benefits do they hold for those who enact them? Prosociality can enhance the actor's well-being.">
    <meta name="journal_id" content="10902">
    <meta name="dc.title" content="The Relationship Between Prosociality, Meaning, and Happiness in Everyday Life">
    <meta name="dc.source" content="Journal of Happiness Studies 2022">
    <meta name="dc.format" content="text/html">
    <meta name="dc.publisher" content="Springer">
    <meta name="dc.date" content="2022-04-13">
    <meta name="dc.type" content="OriginalPaper">
    <meta name="dc.language" content="En">
    <meta name="dc.copyright" content="2022 The Author(s)">
    <meta name="dc.rights" content="2022 The Author(s)">
    <meta name="dc.rightsAgent" content="journalpermissions@springernature.com">
    <meta name="dc.description" content="Prosocial behaviors benefit others, but what benefits do they hold for those who enact them? Prosociality can enhance the actor's well-being.">
    <meta name="prism.issn" content="1573-7780">
    <meta name="prism.publicationName" content="Journal of Happiness Studies">
    <meta name="prism.publicationDate" content="2022-04-13">
    <meta name="prism.section" content="OriginalPaper">
    <meta name="prism.startingPage" content="1">
    <meta name="prism.endingPage" content="18">
    <meta name="prism.copyright" content="2022 The Author(s)">
    <meta name="prism.rightsAgent" content="journalpermissions@springernature.com">
    <meta name="prism.url" content="https://link.springer.com/article/10.1007/s10902-022-00526-1">
    <meta name="prism.doi" content="doi:10.1007/s10902-022-00526-1">
    <meta name="citation_pdf_url" content="https://link.springer.com/content/pdf/10.1007/s10902-022-00526-1.pdf">
    <meta name="citation_fulltext_html_url" content="https://link.springer.com/article/10.1007/s10902-022-00526-1">
    <meta name="citation_journal_title" content="Journal of Happiness Studies">
    <meta name="citation_journal_abbrev" content="J Happiness Stud">
    <meta name="citation_publisher" content="Springer Netherlands">
    <meta name="citation_issn" content="1573-7780">
    <meta name="citation_title" content="The Relationship Between Prosociality, Meaning, and Happiness in Everyday Life">
    <meta name="citation_online_date" content="2022/04/13">
    <meta name="citation_firstpage" content="1">
    <meta name="citation_lastpage" content="18">
    <meta name="citation_article_type" content="Research Paper">
    <meta name="citation_fulltext_world_readable" content="">
    <meta name="citation_language" content="en">
    <meta name="dc.identifier" content="doi:10.1007/s10902-022-00526-1">
    <meta name="DOI" content="10.1007/s10902-022-00526-1">
    <meta name="citation_doi" content="10.1007/s10902-022-00526-1">
    <meta name="citation_springer_api_url" content="http://api.springer.com/xmldata/jats?q=doi:10.1007/s10902-022-00526-1&amp;api_key=">
    <meta name="description" content="Prosocial behaviors benefit others, but what benefits do they hold for those who enact them? Prosociality can enhance the actor's well-being.">
    <meta name="dc.creator" content="Dakin, Brodie C.">
    <meta name="dc.creator" content="Tan, Nicholas P.">
    <meta name="dc.creator" content="Conner, Tamlin S.">
    <meta name="dc.creator" content="Bastian, Brock">
    <meta name="dc.subject" content="Quality of Life Research">
    <meta name="dc.subject" content="Personality and Social Psychology">
    <meta name="dc.subject" content="Economics, general">
    <meta name="dc.subject" content="Quality of Life Research">
    <meta name="dc.subject" content="Philosophy, general">
    <meta name="dc.subject" content="Positive Psychology">
    <meta name="citation_reference" content="citation_journal_title=Journal of Personality and Social Psychology; citation_title=Prosocial spending and well-being: Cross-cultural evidence for a psychological universal; citation_author=LB Aknin, CP Barrington-Leigh, EW Dunn, JF Helliwell, J Burns, R Biswas-Diener, I Kemeza, P Nyende, CE Ashton-James, MI Norton; citation_volume=104; citation_issue=4; citation_publication_date=2013; citation_pages=635-652; citation_doi=10.1037/a0031578; citation_id=CR1">
    <meta name="citation_reference" content="citation_journal_title=Journal of Personality and Social Psychology; citation_title=Does spending money on others promote happiness?: A registered replication report; citation_author=LB Aknin, EW Dunn, J Proulx, I Lok, MI Norton; citation_volume=119; citation_issue=2; citation_publication_date=2020; citation_pages=e15-e26; citation_doi=10.1037/pspa0000191; citation_id=CR2">
    <meta name="citation_reference" content="citation_journal_title=Journal of Personality and Social Psychology; citation_title=When helping helps: Autonomous motivation for prosocial behavior and its influence on well-being for the helper and recipient; citation_author=N Weinstein, RM Ryan; citation_volume=98; citation_issue=2; citation_publication_date=2010; citation_pages=222-244; citation_doi=10.1037/a0016984; citation_id=CR46">
    <meta name="citation_author" content="Dakin, Brodie C.">
    <meta name="citation_author_email" content="brodie.dakin@uqconnect.edu.au">
    <meta name="citation_author_institution" content="School of Psychology, University of Queensland, Brisbane, Australia">
    <meta name="citation_author" content="Tan, Nicholas P.">
    <meta name="citation_author_institution" content="Melbourne School of Psychological Sciences, The University of Melbourne, Melbourne, Australia">
    <meta name="citation_author" content="Conner, Tamlin S.">
    <meta name="citation_author_institution" content="University of Otago, Dunedin, New Zealand">
    <meta name="citation_author" content="Bastian, Brock">
    <meta name="citation_author_institution" content="Melbourne School of Psychological Sciences, The University of Melbourne, Melbourne, Australia">
    <meta name="format-detection" content="telephone=no">
    <meta property="og:url" content="https://link.springer.com/article/10.1007/s10902-022-00526-1">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="SpringerLink">
    <meta property="og:title" content="The Relationship Between Prosociality, Meaning, and Happiness in Everyday Life - Journal of Happiness Studies">
    <meta property="og:description" content="Prosocial behaviors benefit others, but what benefits do they hold for those who enact them? Prosociality can enhance the actor's well-being.">
    <meta property="og:image" content="https://media.springernature.com/w200/springer-static/cover/journal/10902.jpg">
    <title>The Relationship Between Prosociality, Meaning, and Happiness in Everyday Life | SpringerLink</title>
    <link rel="shortcut icon" href="/oscar-static/images/favicons/springerlink/favicon-eb9f5576a3.ico">
    <link rel="icon" sizes="16x16 32x32 48x48" href="/oscar-static/images/favicons/springerlink/favicon-eb9f5576a3.ico">
    <link rel="icon" sizes="16x16" type="image/png" href="/oscar-static/images/favicons/springerlink/favicon-16x16-8bd8c1c945.png">
    <link rel="icon" sizes="32x32" type="image/png" href="/oscar-static/images/favicons/springerlink/favicon-32x32-61a52d80ab.png">
    <link rel="icon" sizes="48x48" type="image/png" href="/oscar-static/images/favicons/springerlink/favicon-48x48-0ec46b6b10.png">
    <link rel="apple-touch-icon" href="/oscar-static/images/favicons/springerlink/app-icon-iphone@3x-f259d46347.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/oscar-static/images/favicons/springerlink/ic_launcher_hdpi-f77cda7f65.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/oscar-static/images/favicons/springerlink/app-icon-ipad-c3fd26520d.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/oscar-static/images/favicons/springerlink/app-icon-114x114-3d7d4cf9f3.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/oscar-static/images/favicons/springerlink/app-icon-iphone@2x-67b35150b3.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/oscar-static/images/favicons/springerlink/ic_launcher_xxhdpi-986442de7b.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/oscar-static/images/favicons/springerlink/app-icon-ipad@2x-677ba24d04.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/oscar-static/images/favicons/springerlink/app-icon-iphone@3x-f259d46347.png">
    <link rel="canonical" href="https://link.springer.com/article/10.1007/s10902-022-00526-1">
  </head>
  <body>
    <p>Yo</p>
  </body>
</html>
`;

const htmlExOneKeyword = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="https://www.spencergreenberg.com/xmlrpc.php">
    <title>Human behavior makes more sense when you understand "Anchor Beliefs" - Spencer Greenberg</title>
    <link rel="alternate" type="application/rss+xml" title="Spencer Greenberg » Feed" href="https://www.spencergreenberg.com/feed/">
    <link rel="alternate" type="application/rss+xml" title="Spencer Greenberg » Comments Feed" href="https://www.spencergreenberg.com/comments/feed/">
    <link rel="alternate" type="application/rss+xml" title="Spencer Greenberg » Human behavior makes more sense when you understand "Anchor Beliefs" Comments Feed" href="https://www.spencergreenberg.com/2021/11/human-behavior-makes-more-sense-when-you-understand-anchor-beliefs/feed/">
    <link rel="canonical" href="https://www.spencergreenberg.com/2021/11/human-behavior-makes-more-sense-when-you-understand-anchor-beliefs/">
    <link rel="shortlink" href="https://wp.me/p1BFiX-Fe">
    <meta name="author" content="Spencer Greenberg">
    <meta name="keywords" content="anchor beliefs">
    <meta property="og:type" content="article">
    <meta property="og:title" content="Human behavior makes more sense when you understand "Anchor Beliefs"">
    <meta property="og:url" content="https://www.spencergreenberg.com/2021/11/human-behavior-makes-more-sense-when-you-understand-anchor-beliefs/">
    <meta property="og:description" content="There's an important type of belief most of us have, which we call Anchor Beliefs.">
    <meta property="article:published_time" content="2021-11-21T15:31:00+00:00">
    <meta property="article:modified_time" content="2021-12-24T23:25:15+00:00">
    <meta property="og:site_name" content="Spencer Greenberg">
    <meta property="og:image" content="https://i0.wp.com/www.spencergreenberg.com/wp-content/uploads/2021/12/anchor.jpg?fit=1200%2C590&amp;ssl=1">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="590">
    <meta property="og:image:alt" content="Photo by Kris-Mikael Krister on Unsplash">
    <meta property="og:locale" content="en_US">
    <meta name="twitter:text:title" content="Human behavior makes more sense when you understand "Anchor Beliefs"">
    <meta name="twitter:image" content="https://i0.wp.com/www.spencergreenberg.com/wp-content/uploads/2021/12/anchor.jpg?fit=1200%2C590&amp;ssl=1&amp;w=640">
    <meta name="twitter:image:alt" content="Photo by Kris-Mikael Krister on Unsplash">
    <meta name="twitter:card" content="summary_large_image">
</head>
<body>
  <h1>Yo</h1>
</body>
</html>
`;

const htmlExCaseSensitivity = `
<HTML>
<HEAD>
<TITLE>Moved Temporarily</TITLE>
</HEAD>
<BODY BGCOLOR="#FFFFFF" TEXT="#000000">
<H1>Moved Temporarily</H1>
</BODY>
</HTML>
`;

const htmlExWhitespace = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta
  name="viewport"
  content="width=device-width,minimum-scale=1,initial-scale=1"
/>
<title>David Hartsough</title>
<meta
  name="description"
  content="David Hartsough is widely regarded as a happy human, drummer, developer, designer, wannabe psychologist/philosopher, and stuntman — more or less."
/>
<meta
  name="keywords"
  content="david,hartsough,davidhartsough,human,drummer,developer,designer,psychologist,philosopher,stuntman"
/>
<meta name="author" content="David Hartsough" />
<meta property="og:title" content="David Hartsough" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://davidhartsough.com" />
<meta property="og:image" content="https://davidhartsough.com/icon.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:alt" content="David Hartsough logo" />
<meta property="og:locale" content="en_US" />
<meta
  property="og:description"
  content="David Hartsough is widely regarded as a happy human, drummer, developer, designer, wannabe psychologist/philosopher, and stuntman — more or less."
/>
<meta property="og:site_name" content="David Hartsough" />
</head>
<body>
<h1>David Hartsough</h1>
</body>
</html>
`;

const htmlExNoValues = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta
  name="viewport"
  content="width=device-width,minimum-scale=1,initial-scale=1"
/>
<title></title>
<meta name="author" content="" />
<meta name="description" content="" />
<meta name="keywords" content="" />
<meta property="og:site_name" content="" />
<meta property="og:url" content="" />
</head>
<body>
<h1>For some reason, the values are empty.</h1>
</body>
</html>
`;

const htmlExNothing = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta
  name="viewport"
  content="width=device-width,minimum-scale=1,initial-scale=1"
/>
</head>
<body>
<h1>Somehow there's no title?!</h1>
</body>
</html>
`;

const nullMetadata = {
  url: null,
  title: null,
  description: null,
  keywords: null,
  author: null,
  siteName: null,
};

describe("get-metadata.js - getMetadata()", () => {
  test("Basic, generic, typical HTML doc - htmlEx", () => {
    expect(getMetadata(htmlExBasic)).toEqual({
      url: "https://link.springer.com/article/10.1007/s10902-022-00526-1",
      title:
        "The Relationship Between Prosociality, Meaning, and Happiness in Everyday Life | SpringerLink",
      description:
        "Prosocial behaviors benefit others, but what benefits do they hold for those who enact them? Prosociality can enhance the actor's well-being.",
      keywords: null,
      author: null,
      siteName: "SpringerLink",
    });
  });
  test("One keyword - htmlExOneKeyword", () => {
    expect(getMetadata(htmlExOneKeyword)).toEqual({
      url: "https://www.spencergreenberg.com/2021/11/human-behavior-makes-more-sense-when-you-understand-anchor-beliefs/",
      title:
        'Human behavior makes more sense when you understand "Anchor Beliefs" - Spencer Greenberg',
      description:
        "There's an important type of belief most of us have, which we call Anchor Beliefs.",
      keywords: ["anchor beliefs"],
      author: "Spencer Greenberg",
      siteName: "Spencer Greenberg",
    });
  });
  test("All caps case sensitivity - htmlExCaseSensitivity", () => {
    expect(getMetadata(htmlExCaseSensitivity)).toEqual({
      url: null,
      title: "Moved Temporarily",
      description: null,
      keywords: null,
      author: null,
      siteName: null,
    });
  });
  test("Different whitespace - htmlExWhitespace", () => {
    expect(getMetadata(htmlExWhitespace)).toEqual({
      url: "https://davidhartsough.com",
      title: "David Hartsough",
      description:
        "David Hartsough is widely regarded as a happy human, drummer, developer, designer, wannabe psychologist/philosopher, and stuntman — more or less.",
      keywords: [
        "david",
        "hartsough",
        "davidhartsough",
        "human",
        "drummer",
        "developer",
        "designer",
        "psychologist",
        "philosopher",
        "stuntman",
      ],
      author: "David Hartsough",
      siteName: "David Hartsough",
    });
  });
  test("Empty values - htmlExNoValues", () => {
    expect(getMetadata(htmlExNoValues)).toEqual({
      url: "",
      title: "",
      description: "",
      keywords: [],
      author: "",
      siteName: "",
    });
  });
  test("Nothing present - htmlExNothing", () => {
    expect(getMetadata(htmlExNothing)).toEqual(nullMetadata);
  });
  test("No param", () => {
    expect(getMetadata()).toEqual(nullMetadata);
  });
  test("Null param", () => {
    expect(getMetadata(null)).toEqual(nullMetadata);
  });
  test("Undefined param", () => {
    expect(getMetadata(undefined)).toEqual(nullMetadata);
  });
  test("Incorrect param type", () => {
    expect(getMetadata([1])).toEqual(nullMetadata);
  });
});
