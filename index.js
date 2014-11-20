'use strict';
var path = require('path');

module.exports = {
  name: 'ember-faker',

  included: function included(app) {
    this.app = app;

    if (app.env !== 'production') {
      app.import(app.bowerDirectory + '/faker/dist/faker.js');
      app.import('vendor/ember-faker/shim.js', {
        type: 'vendor',
        exports: { 'faker': ['default'] }
      });
    }
  },

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  }
};
