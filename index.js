'use strict';

// var path = require('path');

module.exports = {
  name: 'ember-faker',

  options: {
    nodeAssets: {
      faker() {
        return {
          enabled: this._shouldIncludeFiles(),
          import: ['build/build/faker.js']
        }
      }
    }
  },

  included(app) {
    this._super.included.apply(this, arguments);

    this.app = app;
    var addonConfig = this.app.project.config(app.env)['ember-faker'];

    console.log("HERE");

    if (this._shouldIncludeFiles()) {
      app.import('vendor/ember-faker/shim.js', {
        type: 'vendor',
        exports: {
          faker: ['default']
        }
      });
    }
  },

  _shouldIncludeFiles() {
    const app = this.app;
    const addonConfig = app.project.config(app.env)['ember-faker'];

    return app.env !== 'production' || addonConfig.enabled;
  }
};
