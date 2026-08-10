# peiyao611.github.io

Personal academic website. Plain HTML, CSS, and a small amount of JavaScript, with no build step. Every file can be edited directly in the GitHub web editor.

Live at https://peiyao611.github.io

## Before publishing

Search each page for 【 】. Anything wrapped in those brackets is a placeholder that still needs real content. There should be none left when the site goes live.

Two other things to replace:

- `you@ucsc.edu` in `index.html` and `about.html`
- The `href="#"` links for Google Scholar and LinkedIn, in `index.html` and `about.html`

## Files

| File | Contents |
| --- | --- |
| `index.html` | Home. Intro, research summary, selected publication, news |
| `research.html` | Research. One section per thread |
| `publications.html` | Publications, workshop papers, work in progress |
| `about.html` | Bio, teaching, service, contact |
| `assets/style.css` | All styling. The palette is the `:root` block at the top |
| `assets/main.js` | Fade-in on scroll |
| `assets/images/` | `portrait.jpg`, `pub-1.jpg`, `research-1.jpg`, and so on |
| `assets/cv.pdf` | CV, linked from the home page |
| `robots.txt` | Points crawlers at the sitemap |
| `sitemap.xml` | Page list for Google |
| `.nojekyll` | Serves files as-is, without Jekyll |

## Palette

Edit the `:root` block in `assets/style.css` to change colors site-wide.

| Variable | Value | Where it shows |
| --- | --- | --- |
| `--paper` | `#FFFDFB` | Page background, slightly warm white |
| `--ink` | `#33302C` | Body text and headings, warm dark gray |
| `--ink-soft` | `#6E6862` | Secondary text |
| `--pink` | `#FF2D7A` | Primary accent |
| `--pink-deep` | `#D6005A` | Small pink text, darker for readability |
| `--blue` | `#2B5CFF` | Secondary accent, used sparingly |

Pink appears on the home page headline, the short rule under each section heading, the nav underline, publication status flags, venue names, and the callout border. Blue appears on two rules and one numeral, as a break in the rhythm.

Type is Poppins throughout, loaded from Google Fonts. Headings use weight 300, body text weight 400.

## Layout classes

| Class | Use |
| --- | --- |
| `.dash` | Short rule under a heading. Add `dash--blue` for the blue version |
| `.split` | Two columns that stack on mobile |
| `.callout` | Indented block with a pink left border |
| `.blocks` | Three items side by side |
| `.entries` / `.entry` | Publication rows, image left, text right |
| `.entry--plain` | Text-only rows for news, teaching, and service |
| `.status` | Pink italic flag next to a title |
| `.reveal` | Fades in on scroll. Add to any element |

## Adding a page

Copy `research.html`, rename it, and edit the content. Then add a link to it inside the `<nav>` block on all four existing pages, and add its URL to `sitemap.xml`.

## Getting indexed

1. Add `https://peiyao611.github.io` to Google Search Console as a URL prefix property
2. Verify using the HTML tag method, pasting the tag into the `<head>` of `index.html`
3. Submit `sitemap.xml` under Sitemaps
4. Run URL Inspection on the home page and request indexing
5. Link to the site from Google Scholar, ORCID, LinkedIn, and any department or lab page
