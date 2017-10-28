'use strict';

module.exports = {
  name: 'ember-faker',

  options: {
    nodeAssets: {
      faker() {
        return {
          enabled: this._shouldInclude(),
          import: ['build/build/faker.js']
        }
      }
    }
  },

  included(app) {
    this._super.included.apply(this, arguments);

    if (this._shouldInclude()) {
      app.import('vendor/ember-faker/shim.js', {
        type: 'vendor',
        exports: {
          faker: ['default']
        }
      });
    }
  },

  _shouldInclude() {
    const app = this.app;
    const addonConfig = app.project.config(app.env)['ember-faker'];

    return app.env !== 'production' || addonConfig.enabled;
  }
};
