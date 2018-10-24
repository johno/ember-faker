'use strict';

module.exports = {
  name: 'ember-faker',

  options: {
    nodeAssets: {
      faker() {
        let options = {
          enabled: this._shouldInclude(),
        };

        if (this._shouldUsePublic()) {
          options.public = {
            srcDir: 'build/build',
            include: ['faker.js']
          };
        } else {
          options.import = ['build/build/faker.js'];
        }

        return options;
      }
    }
  },

  contentFor(type, { rootURL }) {
    if (type === 'body' && this._shouldUsePublic()) {
      return `<script src="${rootURL}assets/faker.js"></script>`;
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
    return Object.assign(
      {
        enabled: app.env !== 'production'
      },
      // old way, to deprecate
      app.project.config(app.env)['ember-faker'],
      // new hotness
      app.options['ember-faker']
    );
  },

  _shouldInclude() {
    let addonConfig = this._getAddonConfig();

    return addonConfig.enabled;
  },

  _shouldUsePublic() {
    let addonConfig = this._getAddonConfig();

    return addonConfig.usePublic;
  }
};
