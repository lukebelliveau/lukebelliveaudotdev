# lukebelliveaudotdev

Personal website at https://www.lukebelliveau.dev. Plain HTML and CSS, no
build step.

## Local development

Serve the site directory:

    python3 -m http.server 3001 --bind 127.0.0.1 --directory site

Then open http://127.0.0.1:3001/. Links and assets use root paths, so open the
site through a server rather than as files.

## Layout

- `site/` is published as-is. Each page is an `index.html` in its own directory,
  so URLs stay `/projects/`, `/background/` and so on.
- `site/style.css` holds every style. Text uses the system font, and colors
  follow the visitor's system light or dark setting.
- The header and footer are repeated in each page. Change them everywhere when
  editing navigation.

## CV

The CV source is `cv/index.html`. After editing, regenerate the PDF used by
the site's CV links. From the repository root on macOS with Chrome installed:

```sh
cv_profile_dir=$(mktemp -d "${TMPDIR:-/tmp}/cv-print.XXXXXX")
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-first-run --no-default-browser-check \
  --user-data-dir="$cv_profile_dir" --no-pdf-header-footer \
  --print-to-pdf="$PWD/site/files/Luke_Belliveau_CV.pdf" \
  "file://$PWD/cv/index.html"
```

Open the generated PDF and check that it remains two pages with no clipped
text or awkward breaks before publishing. The source sets US Letter paper
and print margins; browser headers and footers are disabled by the command.

## Deployment

Pushing to main runs `.github/workflows/pages.yml`, which uploads `site/` to
GitHub Pages. The custom domain is set in the repository's Pages settings.
