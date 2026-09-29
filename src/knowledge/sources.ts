import type { Source } from './types'

// The research, standards and reports behind each article, keyed by article
// id. The same in every language, so kept once here and attached by index.ts.
//
// Original research papers first, then the standards, then guidance — and
// only sources for what the app really does (checked against src/ on
// 2026-09-29: papaparse with delimiter auto-detection in lib/csv.ts; Recharts
// drawing SVG, whose "smooth curves" are its `monotone` curve — d3's
// curveMonotoneX, Steffen's 1990 method; html-to-image rasterising PNG at 1×,
// 2× or 3×; an org brand colour darkened to WCAG 2.x's 3:1 non-text contrast
// in App.tsx; and share links as lz-string (an LZW variant)
// compressToEncodedURIComponent in the URL fragment, `#d=…`, in lib/share.ts).
// Nothing is stored or uploaded, so no storage or crypto sources.
//
// ⚠️ `pdf` (our hosted copy at opensource.unisim.co.uk/kb/papers/) ONLY where
// the licence allows redistribution — here only Tidy Data (JSS, CC BY 3.0).
// RFC 4180 and RFC 3986 have no RFC Editor PDF, so they link the .html.
// JASA, ACM, Wiley, IEEE, EDP Sciences and ISO documents link to the free
// author copy or the DOI.

const RFC_4180: Source = {
  kind: 'standard',
  title: 'Common Format and MIME Type for Comma-Separated Values (CSV) Files (RFC 4180)',
  authors: 'Yakov Shafranovich',
  publisher: 'IETF',
  year: 2005,
  href: 'https://www.rfc-editor.org/rfc/rfc4180.html',
}

export const SOURCES: Record<string, Source[]> = {
  'choosing-a-chart': [
    {
      kind: 'paper',
      title: 'Graphical Perception: Theory, Experimentation, and Application to the Development of Graphical Methods',
      authors: 'William S. Cleveland, Robert McGill',
      publisher: 'Journal of the American Statistical Association',
      year: 1984,
      href: 'https://doi.org/10.1080/01621459.1984.10478080',
    },
    {
      kind: 'paper',
      title: 'Crowdsourcing Graphical Perception: Using Mechanical Turk to Assess Visualization Design',
      authors: 'Jeffrey Heer, Michael Bostock',
      publisher: 'ACM CHI',
      year: 2010,
      href: 'https://idl.cs.washington.edu/files/2010-MTurk-CHI.pdf',
    },
    {
      kind: 'paper',
      title: 'Arcs, Angles, or Areas: Individual Data Encodings in Pie and Donut Charts',
      authors: 'Drew Skau, Robert Kosara',
      publisher: 'Computer Graphics Forum (EuroVis)',
      year: 2016,
      href: 'https://kosara.net/papers/2016/Skau-EuroVis-2016.pdf',
    },
    {
      kind: 'guidance',
      title: 'Data visualisation: charts',
      publisher: 'Government Analysis Function',
      href: 'https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/',
    },
  ],
  'what-is-csv': [
    RFC_4180,
    {
      kind: 'standard',
      title: 'Media type registration: text/tab-separated-values',
      publisher: 'IANA',
      href: 'https://www.iana.org/assignments/media-types/text/tab-separated-values',
    },
    {
      kind: 'paper',
      title: 'Tidy Data',
      authors: 'Hadley Wickham',
      publisher: 'Journal of Statistical Software',
      year: 2014,
      href: 'https://doi.org/10.18637/jss.v059.i10',
      pdf: 'papers/tidy-data-2014.pdf',
      licence: 'CC BY 3.0 — Hadley Wickham',
    },
    {
      kind: 'guidance',
      title: 'Using CSV file format',
      publisher: 'Government Digital Service',
      year: 2021,
      href: 'https://www.gov.uk/guidance/using-csv-file-format',
    },
  ],
  'data-problems': [
    {
      kind: 'paper',
      title: 'Data Organization in Spreadsheets',
      authors: 'Karl W. Broman, Kara H. Woo',
      publisher: 'The American Statistician',
      year: 2018,
      href: 'https://doi.org/10.1080/00031305.2017.1375989',
    },
    RFC_4180,
    {
      kind: 'standard',
      title: 'Unicode Locale Data Markup Language (LDML) Part 3: Numbers (UTS #35) — decimal and grouping separators by locale',
      publisher: 'Unicode Consortium',
      href: 'https://unicode.org/reports/tr35/tr35-numbers.html',
    },
    {
      kind: 'standard',
      title: 'ISO 8601-1:2019 — Date and time — Representations for information interchange — Part 1: Basic rules',
      publisher: 'ISO',
      year: 2019,
      href: 'https://www.iso.org/standard/70907.html',
    },
  ],
  'how-it-works': [
    {
      kind: 'paper',
      title: 'A simple method for monotonic interpolation in one dimension',
      authors: 'M. Steffen',
      publisher: 'Astronomy and Astrophysics',
      year: 1990,
      href: 'https://articles.adsabs.harvard.edu/pdf/1990A%26A...239..443S',
    },
    {
      kind: 'standard',
      title: 'Scalable Vector Graphics (SVG) 2',
      publisher: 'W3C',
      href: 'https://www.w3.org/TR/SVG2/',
    },
    {
      kind: 'standard',
      title: 'Portable Network Graphics (PNG) Specification (Third Edition)',
      publisher: 'W3C',
      year: 2025,
      href: 'https://www.w3.org/TR/png-3/',
    },
    {
      kind: 'guidance',
      title: 'Understanding WCAG 2.2 Success Criterion 1.4.11: Non-text Contrast',
      publisher: 'W3C Web Accessibility Initiative',
      href: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html',
    },
  ],
  'privacy-and-sharing': [
    {
      kind: 'paper',
      title: 'Compression of individual sequences via variable-rate coding',
      authors: 'Jacob Ziv, Abraham Lempel',
      publisher: 'IEEE Transactions on Information Theory',
      year: 1978,
      href: 'https://doi.org/10.1109/TIT.1978.1055934',
    },
    {
      kind: 'paper',
      title: 'A Technique for High-Performance Data Compression',
      authors: 'Terry A. Welch',
      publisher: 'IEEE Computer',
      year: 1984,
      href: 'https://doi.org/10.1109/MC.1984.1659158',
    },
    {
      kind: 'guidance',
      title: 'lz-string: JavaScript compression, fast! — the LZW-based compressor share links use',
      href: 'https://pieroxy.net/blog/pages/lz-string/index.html',
    },
    {
      kind: 'standard',
      title: 'Uniform Resource Identifier (URI): Generic Syntax (RFC 3986), §3.5: Fragment',
      authors: 'Tim Berners-Lee, Roy T. Fielding, Larry Masinter',
      publisher: 'IETF',
      year: 2005,
      href: 'https://www.rfc-editor.org/rfc/rfc3986.html#section-3.5',
    },
  ],
}
