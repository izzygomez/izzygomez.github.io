# Izzy's Personal Website ✨

Always a work in progress™️

## Development

Built with [Jekyll](https://jekyllrb.com/) & [Github Pages](https://pages.github.com/).

1. Clone the repo: `git clone https://github.com/izzygomez/izzygomez.github.io`
1. Initialize & download submodules: `git submodule update --init --recursive`
1. Install local `pre-commit` hooks: `pre-commit install`
   - This assumes `pre-commit` is installed; can install via `pip`, but I prefer [a `brew` install](https://github.com/izzygomez/mac-setup/commit/a18444b8f792dee0d7236dcb3af9bd529d0a3e14).
1. Run local server & view at `localhost:4000`: `jekyll s`

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

- Consider adding PGP key (used on Keybase + Github commit verification) to footer of website.
  - e.g. verified way of sending me encrypted message
- Add "quotes" section to footer
  - see `_data/quotes.yml` & [docs](https://jekyllrb.com/docs/datafiles/) here
  - consider adding quotes from old Wordpress site
- Cleanup subdir's here & either delete them or link to them in some capacity on landing page.
- Include pics (of me?) / maybe feed from socials on landing page? (note: `images/me/` exists now)
- Create `bookshelf/` (a la https://patrickcollison.com/bookshelf).
- Add some explanation of directory layout here in `README`.
- Add a section to this README (or possibly blog post?) detailing how this website & email server is setup (mailgun, namecheap, github pages, cloudflare, etc).
- Re-engineer `redirects/`. Specifically, change it so that it's just `r/`, & make it so that each new endpoint created doesn't require a whole new folder to be created. i.e. I'd like to be able to easily add a new line in some file like `new_endpoint: "some_new_endpoint.com"` & `izzygomez.com/r/new_endpoint` should automatically work.
- If I start writing blog posts again, consider using the [Shiori](https://ellekasai.github.io/shiori/) theme (note: learned of this theme via [kalzumeus.com](https://www.kalzumeus.com/)).
- Consider adding "built by [jekyll](https://jekyllrb.com/)" or something like that to website footer
- Implement Github Actions to mirror local auto formatting.

## Notes

- Ideally would update `master` branch name to `main` ([context](https://github.blog/changelog/2020-10-01-the-default-branch-for-newly-created-repositories-is-now-main/)) but [git.io/izzy](https://git.io/izzy) redirects to `master` & [can't be edited anymore](https://github.blog/changelog/2022-04-25-git-io-deprecation/) — & I like that succinct, aesthetic link in the website footer 🫠.
