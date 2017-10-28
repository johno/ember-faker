import { run } from '@ember/runloop';
import { merge } from '@ember/polyfills';
import Application from '../../app';
import Router from '../../router';
import config from '../../config/environment';

export default function startApp(attrs) {
  var App;

  var attributes = merge({}, config.APP);
  attributes = merge(attributes, attrs); // use defaults, but you can override;

  Router.reopen({
    location: 'none'
  });

  run(function() {
    App = Application.create(attributes);
    App.setupForTesting();
    App.injectTestHelpers();
  });

  App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

  return App;
}
