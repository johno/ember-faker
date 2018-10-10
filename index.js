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

  _getAddonConfig() {
    const app = this._findHost ? this._findHost() : this.app;
    return Object.assign({
      enabled: app.env !== 'production'
    }, app.project.config(app.env)['ember-faker']);
  },

  _shouldInclude() {
    let addonConfig = this._getAddonConfig();

    return addonConfig.enabled;
  }
};
