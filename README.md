# Jekyll Webpack Starter Project

Are you like me? Love Jekyll but hate SASS? Here is a little project to get you going with a nice PostCSS webpack build into a simple `jekyll` static site.

- no `_posts`: no blog by default.
- no `javascript`: the webpack build is for `css` only.
- menu helper include to aid in navigation, something `jekyll` isn't super good at.

Built with `jekyll` and `webpack`. The layout and menu is in `_includes` and `_layouts`. CSS is built with `PostCSS` and is located in `_css`. Static assets like images and fonts should be in `_assets`.


# Development

### Setup

Requires `ruby` with `rubygems`, `node` and `yarn`

1. `gem install jekyll`
1. `yarn install`


### Local Development

This needs to be better, but works for now.

1. `yarn run dev-webpack` in one terminal window
1. `yarn run dev-jekyll` in another


### Deploy

Set up your favourite static site hosting, I used to run S3 but now I'm all Firebase Hosting.

So now it’s set up for firebase, just run `yarn run deploy-stage` or `yarn run deploy-production`.
