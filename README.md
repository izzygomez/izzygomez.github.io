# Izzy's Personal Website ✨

Always a work in progress™️

## Development

Built with [Jekyll](https://jekyllrb.com/) & [Github Pages](https://pages.github.com/).

1. Clone the repo: `git clone https://github.com/izzygomez/izzygomez.github.io`
1. Install local `pre-commit` hooks: `pre-commit install`
   - This assumes `pre-commit` is installed; can install via `pip`, but I prefer [a `brew` install](https://github.com/izzygomez/mac-setup/commit/a18444b8f792dee0d7236dcb3af9bd529d0a3e14).
1. Run local server & view at `localhost:4000`: `jekyll s`
1. To test on mobile devices ([inspo](https://www.joshwcomeau.com/blog/local-testing-on-an-iphone/)) with `ngrok` (using my static URL), & access via izzygomez.com/r/dev:

```shell
ngrok http --url=merely-full-gnat.ngrok-free.app 4000 --oauth google --oauth-allow-email {MY_GMAIL}
```

## Auto-formatting

This repo uses [`pre-commit`](https://pre-commit.com/) to automatically format and lint files before they are committed. The formatting is powered by [`prettier`](https://prettier.io/docs/en/), with support for [Liquid](https://shopify.github.io/liquid/) Jekyll templates using the [@shopify/prettier-plugin-liquid](https://www.npmjs.com/package/@shopify/prettier-plugin-liquid) plugin. See `.pre-commit-config.yaml` & `prettier.config.js` for configuration notes & details.

Setup `pre-commit` per install instructions above. If at any point you'd like to run `pre-commit` against all files, run:

```shell
pre-commit run --all-files --verbose
```

To skip `pre-commit` checks for a single commit:

```shell
git commit -n/--no-verify
```

To clean out cached `pre-commit` files:

```shell
pre-commit clean
```

Note that `package.json` is included in order to power GitHub Actions workflows (TODO implement), but it is not necessary for local development.

## TODOs

- Add "quotes" section to footer
  - see `_data/quotes.yml` & [docs](https://jekyllrb.com/docs/datafiles/) here
  - consider adding quotes from old Wordpress site
- Cleanup subdir's here & either delete them or link to them in some capacity on landing page.
- Create `bookshelf/` (a la https://patrickcollison.com/bookshelf).
- Add some explanation of directory layout here in `README`.
- Add a section to this README (or possibly blog post?) detailing how this website & email server is setup (mailgun, namecheap, github pages, cloudflare, etc).
- Re-engineer `redirects/`. Specifically, change it so that it's just `r/`, & make it so that each new endpoint created doesn't require a whole new folder to be created. i.e. I'd like to be able to easily add a new line in some file like `new_endpoint: "some_new_endpoint.com"` & `izzygomez.com/r/new_endpoint` should automatically work.
- If I start writing blog posts again, consider using the [Shiori](https://ellekasai.github.io/shiori/) theme (note: learned of this theme via [kalzumeus.com](https://www.kalzumeus.com/)).
- Implement Github Actions to mirror local auto formatting.
- Use this [last modified plugin](https://github.com/gjtorikian/jekyll-last-modified-at) on posts.

## Notes

- Ideally would update `master` branch name to `main` ([context](https://github.blog/changelog/2020-10-01-the-default-branch-for-newly-created-repositories-is-now-main/)) but [git.io/izzy](https://git.io/izzy) redirects to `master` & [can't be edited anymore](https://github.blog/changelog/2022-04-25-git-io-deprecation/) — & I like that succinct, aesthetic link in the website footer 🫠.
