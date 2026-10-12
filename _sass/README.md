# Site styles

Jekyll compiles `assets/css/styles.scss` into the site's single stylesheet.
Run `bundle exec jekyll build`; no separate CSS build or package installation is required.

- `_settings.scss`: spacing scale, breakpoints, widths, font settings and RFS settings.
- `_bootstrap.scss`: selected Bootstrap imports and utility families.
- `_typography.scss`: exact golden-ratio size tokens, reading styles and text roles.
- `main.scss`: theme, layout and component presentation.
- `vendor/bootstrap/`: unmodified Bootstrap 5.3.3 SCSS files required by those imports, with the upstream MIT license.

Bootstrap sources came from the official `bootstrap@5.3.3` npm package. Keep vendor files
unchanged when adjusting the site. The existing spacing map remains intact, including
steps 9 (0.75rem) and 10 (2.25rem), because existing posts use that vocabulary.

Bootstrap's full breakpoint map stays available; the current site uses `md` for outer
padding and `lg` for columns. Preserve complete selected utility families instead of
removing individual selectors based on today's HTML, so new posts remain predictable.

The heading scale uses phi = (1 + sqrt(5)) / 2, with a half-power step. Above the RFS
breakpoint it uses the full scale; below it, the existing RFS base and factor compress
larger headings. Bootstrap and the font-size utilities reference the same CSS tokens.
