# Jekyll Webpack Starter Project

Are you like me? Love Jekyll but hate SASS? Here is a little project to get you going with a nice `PostCSS` `webpack` build into a simple `jekyll` static site.

## Features

- Modern, livereload environment; both `webpack` and `jekyll` will livereload the browser. Yeah never hit refresh again!
- Both `css` and `js` end up as static files.
- No blog by default; just add `_posts` and `_drafts` folders with `.md` files to start blogging.
- Menu helper included to aid in dynamic navigation, something `jekyll` isn't super good at.
- Static assets should be in `_assets`, which gets synced over the `jekyll`’s default `assets` at build time.


# Development

### Setup

Requires `ruby` with `rubygems`, `node` and `yarn`

1. `bundle install`
1. `yarn install`


### Local Development

This needs to be better, but works for now.

1. `yarn run dev-webpack` in one terminal window
1. `yarn run dev-jekyll` in another


### Deploy

Set up your favourite static site hosting, I used to run S3 but now I'm all Firebase Hosting.

So now it’s set up for firebase, just run `yarn run deploy-stage` or `yarn run deploy-production`.
