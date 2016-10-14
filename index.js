'use strict';
var path = require('path');

module.exports = {
  name: 'ember-faker',

  included: function included(app) {
    this._super.included.apply(this, arguments);

    // Fixes an issue if references as *dependency* in package.json, not as
    // *devDependency*.
    // See: https://github.com/ember-cli/ember-cli/issues/5747
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;
    var addonConfig = this.app.project.config(app.env)['ember-faker'];

    if (app.env !== 'production' || addonConfig.enabled) {
      app.import(app.bowerDirectory + '/Faker/build/build/faker.js');
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
