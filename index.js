'use strict';
let path = require('path');

module.exports = {
  name: 'ember-faker',

  included(app) {
    this._super(...arguments);

    this.app = app;
    let addonConfig = this.app.project.config(app.env)['ember-faker'];

    if (app.env !== 'production' || addonConfig.enabled) {
      app.import(app.bowerDirectory + '/Faker/build/build/faker.js');
      app.import('vendor/ember-faker/shim.js', {
        type: 'vendor',
        exports: { 'faker': ['default'] }
      });
    }
  },

  blueprintsPath() {
    return path.join(__dirname, 'blueprints');
  }
};
