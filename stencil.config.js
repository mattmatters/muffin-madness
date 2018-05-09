const sass = require('@stencil/sass');

exports.config = {
  bundles: [
    { components: ['my-name'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ],
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
