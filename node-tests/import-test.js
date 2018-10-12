/* eslint-env node */

const expect = require('chai').expect;
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const describe = require('mocha').describe;
const afterEach = require('mocha').afterEach;
const it = require('mocha').it;

describe('import', function() {
  this.timeout(15000);

  afterEach(function() {
    delete process.env.EMBER_ENV;
  });

  it(`doesn't include faker in production environment by default`, function() {
    process.env.EMBER_ENV = 'production';
    const addon = new EmberAddon();

    expect(addon._scriptOutputFiles['/assets/vendor.js']).to.not.include(
      'vendor/ember-faker/shim.js'
    );
  });

  ['development', 'test'].forEach(function(environment) {
    it('includes faker in ' + environment + ' environment by default', function() {
      process.env.EMBER_ENV = environment;
      const addon = new EmberAddon();

      expect(addon._scriptOutputFiles['/assets/vendor.js']).to.include(
        'vendor/ember-faker/shim.js'
      );
    });
  });

  describe('config/environment', function() {
    it('includes faker in production when enabled is set to true', function() {
      process.env.EMBER_ENV = 'production';
      const addon = new EmberAddon({
        configPath: 'tests/fixtures/config/environment-enabled'
      });

      expect(addon._scriptOutputFiles['/assets/vendor.js']).to.include(
        'vendor/ember-faker/shim.js'
      );
    });

    it('excludes faker in development when enabled is set to false', function() {
      const addon = new EmberAddon({
        configPath: 'tests/fixtures/config/environment-disabled'
      });

      expect(addon._scriptOutputFiles['/assets/vendor.js']).to.not.include(
        'vendor/ember-faker/shim.js'
      );
    });
  });

  describe('ember-cli-build', function() {
    it('includes faker in production when enabled is set to true', function() {
      process.env.EMBER_ENV = 'production';
      const addon = new EmberAddon({
        'ember-faker': {
          enabled: true
        }
      });

      expect(addon._scriptOutputFiles['/assets/vendor.js']).to.include(
        'vendor/ember-faker/shim.js'
      );
    });

    it('excludes faker in development when enabled is set to false', function() {
      const addon = new EmberAddon({
        'ember-faker': {
          enabled: false
        }
      });

      expect(addon._scriptOutputFiles['/assets/vendor.js']).to.not.include(
        'vendor/ember-faker/shim.js'
      );
    });
  });

});
