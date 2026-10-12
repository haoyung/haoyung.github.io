# Site styles

Jekyll compiles `assets/css/styles.scss` into the site's single stylesheet.
Run `bundle exec jekyll build`; no separate CSS build or package installation is required.

- `_settings.scss`: spacing scale, breakpoints, widths, font settings and RFS settings.
- `_bootstrap.scss`: selected Bootstrap imports and utility families.
- `_bootstrap-utilities.scss`: retained Bootstrap utility definitions and shared spacing generation.
- `_typography.scss`: exact golden-ratio size tokens, reading styles and text roles.
- `main.scss`: theme, layout and component presentation.
- `vendor/bootstrap/`: unmodified Bootstrap 5.3.3 SCSS files required by those imports, with the upstream MIT license.

Bootstrap sources came from the official `bootstrap@5.3.3` npm package. Keep vendor files
unchanged when adjusting the site. The site's spacing steps are ordered by size:

| Step | rem | px at the default 16px root size |
| --- | --- | --- |
| 0 | 0 | 0 |
| 1 | 0.25 | 4 |
| 2 | 0.5 | 8 |
| 3 | 0.75 | 12 |
| 4 | 1 | 16 |
| 5 | 1.5 | 24 |
| 6 | 2 | 32 |
| 7 | 2.25 | 36 |
| 8 | 3 | 48 |
| 9 | 4 | 64 |
| 10 | 4.5 | 72 |

Templates, posts, drafts and HTML generators use this same scale. The values are
custom site settings, so the step numbers differ from Bootstrap's default scale.

Bootstrap's full breakpoint map stays available; the current site uses `md` for outer
padding and `lg` for columns. Preserve complete selected utility families instead of
removing individual selectors based on today's HTML, so new posts remain predictable.

Article image groups put their outer spacing on the `.row`: `mt-5 mt-lg-6`
and `mb-5 mb-lg-6` (24px below `lg`, 32px from `lg`). This lets adjacent
paragraph margins collapse instead of adding to a margin inside the flex row.
Columns do not repeat that outer spacing. For two images, the second column uses
`mt-5 mt-lg-0` to separate them only while stacked. A caption-only row needs no
top margin; `.image-description` already supplies its 8px gap. Adjacent image
rows can share one outer gap, and only the final row needs bottom spacing.
Keep `image-wide` / `image-narrow` for image width caps; those classes add no
vertical spacing.

Utility definitions use string map keys to avoid an intermittent Ruby Sass equality
error when numeric keys are mixed with strings or null. Only retained families are
evaluated; the upstream Bootstrap utility generator still produces the CSS.

The heading scale uses phi = (1 + sqrt(5)) / 2, with a half-power step. Above the RFS
breakpoint it uses the full scale; below it, the existing RFS base and factor compress
larger headings. Bootstrap and the font-size utilities reference the same CSS tokens.

Footer controls use a three-column grid with equal outer columns, so the language
switcher stays centered even if the social group grows. The row inherits body's
line height (1.6). The single-line language label uses `text-box-trim` with
`cap alphabetic` edges to center its capital-letter area instead of the surrounding
line-box space. Older browsers ignore these properties and keep ordinary line-box
centering. Icon controls use inline flex and block SVGs to avoid baseline gaps.
Icon size is 1.125em (18px at a 16px font), so it scales with text.
