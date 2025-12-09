# Izzy's Personal Website ✨

Always a work in progress.

## Development

Built with [Jekyll](https://jekyllrb.com/) & [Github Pages](https://pages.github.com/).

1. Clone the repo: `git clone https://github.com/izzygomez/izzygomez.github.io`
1. Install local `pre-commit` hooks: `pre-commit install`
   - This assumes `pre-commit` is installed; can install via `pip`, but I prefer [a `brew` install](https://github.com/izzygomez/mac-setup/commit/a18444b8f792dee0d7236dcb3af9bd529d0a3e14).
1. Run local server & view at `localhost:4000`: `jekyll s`
1. To test on mobile with `ngrok` using a static URL ([inspo](https://www.joshwcomeau.com/blog/local-testing-on-an-iphone/)):

```shell
ngrok http --url=merely-full-gnat.ngrok-free.app 4000 --oauth google --oauth-allow-email {MY_GMAIL}
# access via izzygomez.com/dev
```

## Pre-commit

This repo uses [`pre-commit`](https://pre-commit.com/) to automatically format & lint files before they are committed, & also as part of the required checks before a PR can be merged via [pre-commit.ci](https://pre-commit.ci/). See `.pre-commit-config.yaml` for configuration details.

<details>
<summary><h2>TODOs</h2></summary>

- Add "quotes" section to footer
  - see `_data/quotes.yml` & [docs](https://jekyllrb.com/docs/datafiles/) here
  - consider adding quotes from old Wordpress site
- Cleanup subdir's here & either delete them or link to them in some capacity on landing page.
- Add some explanation of directory layout here in `README`.
- Add a section to this README (or possibly blog post?) detailing how this website & email server is setup (mailgun, namecheap, github pages, cloudflare, etc).
- Re-engineer `redirects/`. Specifically, change it so that it's just `r/`, & make it so that each new endpoint created doesn't require a whole new folder to be created. i.e. I'd like to be able to easily add a new line in some file like `new_endpoint: "some_new_endpoint.com"` & `izzygomez.com/r/new_endpoint` should automatically work.
- Implement Github Actions to mirror local auto formatting.
- Consider migrating as much of site as possible to markdown files, so that it's easier to edit. Don't know if this is quite true, but anything outside `_includes/` & `_layouts/` seems fair game.
- Books:
  - Finish writing `books/why.md`.
  - Consider linking from front page.
  - Finish importing old book reviews from Goodreads.
    - Maybe edit reviews where I motivate the "star" rating based on a "real" out-of-ten score, since that's specific to Goodreads & I'm no longer bound by that.
    - Make sure that HTML content from Goodreads review is converted to markdown when publishing here.
    - Optional: create script to automatically copy generated HTML from markdown files here to upload to Goodreads (if I choose to continue using that platform).
  - Consider using the [last modified plugin](https://github.com/gjtorikian/jekyll-last-modified-at) on book reviews to show when review has been updated.
  - Consider engineering a "b/" shortlink for books.
  - Create something like `/train` or `/runs` or `/fit` to link to from strava bio ("izzy.gg/train"); should be fitness related page.
  - Consider adding a successful "github pages deploy" step to the required checks before PR can be merged.
  </details>
