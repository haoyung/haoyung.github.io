source 'https://rubygems.org'

# Local dev only: the live site is built by GitHub Pages (Jekyll 3.x),
# so this mirrors that environment.
gem 'jekyll', '~> 3.9'
gem 'kramdown-parser-gfm' # GFM markdown, Jekyll's default input
gem 'webrick'             # needed by `jekyll serve` on Ruby 3+

group :jekyll_plugins do
  gem 'jekyll-redirect-from'
  gem 'jekyll-seo-tag'
  gem 'jekyll-sitemap'
end

# Stdlib gems dropped from Ruby's defaults in 3.4+, still required by Jekyll 3.x
gem 'base64'
gem 'bigdecimal'
gem 'csv'
gem 'logger'
