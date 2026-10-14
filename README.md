# lukebelliveaudotdev

Personal website, developed and deployed from this repository.

## Local development

Use Node.js 22, then run:

    npm ci
    npm run dev

## Deployment

GitHub Actions builds the site and deploys it to GitHub Pages on pushes to main.
The workflow gets the site URL and base path from the repository's Pages
settings, so both a custom domain and a repository subpath are supported.

To create a static build locally:

    npm run export

The result is in out/. Next.js 13.0.2 uses a separate next export step. Images
are served directly, and page directories support direct links on GitHub Pages.
For a subpath build, set NEXT_PUBLIC_BASE_PATH before running the export.

Pull requests run the same build without publishing. Hosting changes are in
.github/workflows/pages.yml; application code and public assets are in src/
and public/.
