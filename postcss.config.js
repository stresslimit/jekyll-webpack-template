module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: ['last 2 version', 'Explorer >= 10', 'Android >= 4']
    },
    'postcss-import': {},
    'postcss-custom-properties': {
      preserve: false
    },
    'postcss-custom-media': {},
    'postcss-calc': {},
    'postcss-extend': {},
    'postcss-nested': {},
    'csswring': {},
  },
}
