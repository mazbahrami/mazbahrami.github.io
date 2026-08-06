# Maziyar Bahrami — Personal Website

Static personal website published at <https://mazbahrami.github.io>.

## Main navigation

- Background
- Research
- Writing
- Learning R
- CV

Contact details remain available through the homepage, footer, and `/contact/` page. The former `/projects/` page redirects to the integrated **Current Research and Selected Work** section on `/research/`.

## Publishing a new article

1. Copy `writing/the-missing-control-loop/index.html` into a new folder under `writing/`.
2. Replace the article title, description, metadata, body, and references.
3. Add the new article to `writing/index.html` and the homepage if it should be featured.
4. Add its URL to `sitemap.xml`.
5. Commit and push to `main`; GitHub Pages deploys automatically.

## Updating the site

Upload all files and folders from this package to the repository root. Keep `index.html`, `assets/`, `about/`, `research/`, `writing/`, `learning-r/`, `cv/`, and `.github/` at the top level.
