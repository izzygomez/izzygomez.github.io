# Izzy's Personal Website ✨

Always a work in progress™️

## Development

Built with [Jekyll](https://jekyllrb.com/) & [Github Pages](https://pages.github.com/).

1. Clone the repo: `git clone https://github.com/izzygomez/izzygomez.github.io`
1. Initialize & download submodules: `git submodule update --init --recursive`
1. Run local server & view at `localhost:4000`: `jekyll s`

## TODOs
* Consider adding PGP key (used on Keybase + Github commit verification) to footer of website.
  * e.g. verified way of sending me encrypted message
* Add "quotes" section to footer
  * see `_data/quotes.yml` & [docs](https://jekyllrb.com/docs/datafiles/) here
  * consider adding quotes from old Wordpress site
* Update `resume/` with more up-to-date info
  * consider changing style to `\moderncvstyle{classic}` in latex file.
  * consider having a `projects/` page that has resume contents in page form
* Cleanup subdir's here & either delete them or link to them in some capacity on landing page.
* Include pics (of me?) / maybe feed from socials on landing page? (note: `images/me/` exists now)
* Create `bookshelf/` (a la https://patrickcollison.com/bookshelf).
* Add some explanation of directory layout here in `README`.
* Add a section to this README (or possibly blog post?) detailing how this website & email server is setup (mailgun, namecheap, github pages, cloudflare, etc).
* Re-engineer `redirects/`. Specifically, change it so that it's just `r/`, & make it so that each new endpoint created doesn't require a whole new folder to be created. i.e. I'd like to be able to easily add a new line in some file like `new_endpoint: "some_new_endpoint.com"` & `izzygomez.com/r/new_endpoint` should automatically work.
* Add tooling for auto-formatting of files. e.g. using [`tidy-html5`](https://formulae.brew.sh/formula/tidy-html5#default) for formatting HTML files.
* If I start writing blog posts again, consider using the [Shiori](https://ellekasai.github.io/shiori/) theme (note: learned of this theme via [kalzumeus.com](https://www.kalzumeus.com/)).

## Notes
* Ideally would update `master` branch name to `main` ([context](https://github.blog/changelog/2020-10-01-the-default-branch-for-newly-created-repositories-is-now-main/)) but [git.io/izzy](https://git.io/izzy) redirects to `master` & [can't be edited anymore](https://github.blog/changelog/2022-04-25-git-io-deprecation/) — & I like that succinct, aesthetic link in the website footer 🫠.
