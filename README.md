# Jekyll Webpack Starter Project

Are you like me? Love Jekyll but hate SASS? Here is a little project to get you going with a nice PostCSS webpack build into a simple `jekyll` static site.

- no `_posts`: no blog by default.
- no `javascript`: the webpack build is for `css` only.
- menu helper include to aid in navigation, something `jekyll` isn't super good at.

Built with `jekyll` and `webpack`. The layout and menu is in `_includes` and `_layouts`. CSS is built with `PostCSS` and is located in `_css` [ignore the `.js` file, it's just so `webpack` understands the dependency tree].


# Development

### Setup

Requires `ruby` with `rubygems`, `node` with `npm`

1. `gem install jekyll`
1. `npm i`


### Local Development

This needs to be better, but works for now.

1. `npm run dev-webpack` in one terminal window
1. `npm run dev-jekyll` in another


### Deploy

Needs to be set up with AWS S3 keys, then just run `npm run deploy` and up it goes!
