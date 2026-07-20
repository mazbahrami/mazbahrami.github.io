# Maziyar Bahrami — Personal Website

A lightweight, responsive personal website built as plain static HTML, CSS, and JavaScript. It requires no paid service, framework, database, or build step and is prepared for deployment at **https://mazbahrami.github.io**.

## What is included

- Professional homepage and biography
- About, Research, Experience, Projects, Writing, CV, and Contact pages
- Responsive light/dark design
- SEO titles, descriptions, canonical URLs, Open Graph cards, JSON-LD, sitemap, and robots.txt
- GitHub Pages workflow
- Scientific article template with equations, Mermaid diagrams, tables, references, code, and figure captions
- Honest placeholders for information that was not supplied

## Before publishing

### 1. Replace the portrait

Replace this file with a real professional portrait using the **same filename**:

`assets/images/maziyar-bahrami-profile.webp`

Recommended dimensions: around 1200 × 1500 pixels, portrait orientation, WebP format. Do not use an AI-generated fictional portrait.

### 2. Add professional links

Edit these files and add your exact URLs only:

- `contact/index.html`
- the footer in each HTML page, when adding LinkedIn, Google Scholar, or ORCID

The GitHub link is already set to: https://github.com/mazbahrami

### 3. Add the PDF CV

Create this folder and upload your PDF:

`assets/files/Maziyar-Bahrami-CV.pdf`

Then add a download button in `cv/index.html` and/or the homepage.

### 4. Verify factual details

Review employer names, dates, degree wording, and project descriptions before publication. The current text uses information already supplied in conversation but should still be checked against the latest CV.

## Publish to GitHub Pages

1. Create or open the repository `mazbahrami/mazbahrami.github.io`.
2. Unzip this package on your computer.
3. Upload **the contents of the folder**, not the ZIP file itself, to the repository root.
4. Commit the files to the `main` branch.
5. Open repository **Settings → Pages**.
6. Under **Build and deployment**, choose **GitHub Actions**.
7. Open the **Actions** tab and wait for the “Deploy static site to GitHub Pages” workflow to show a green check.
8. Visit https://mazbahrami.github.io.

## Add a scientific article

1. Copy `templates/scientific-article-template.html`.
2. Create a folder such as `writing/ai-governance-by-design/`.
3. Save the copied file as `writing/ai-governance-by-design/index.html`.
4. Replace the title, description, canonical URL, dates, article text, and JSON-LD if added.
5. Add a card linking to the article in `writing/index.html`.
6. Add the article URL to `sitemap.xml`.
7. Remove `<meta name="robots" content="noindex">` only when the article is ready for search engines.

## Draft safety

GitHub Pages publishes files in this repository. Keep unfinished drafts outside the repository, or store them in a local folder that you do not upload.

## Local preview

From the project folder, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

```text
.
├── index.html
├── about/
├── research/
├── experience/
├── projects/
├── writing/
├── cv/
├── contact/
├── templates/
├── assets/
├── .github/workflows/pages.yml
├── robots.txt
└── sitemap.xml
```
