import Application from '../../app';
import Config from '../../config/environment';
import Ember from 'ember';

export default function startApp(attrs) {
  let application = null;

  let attributes = Ember.merge({}, Config.APP);

  // use defaults, but you can override;
  attributes = Ember.merge(attributes, attrs);

  Ember.run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}

