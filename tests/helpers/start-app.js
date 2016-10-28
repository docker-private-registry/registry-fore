import Application from '../../app';
import Config from '../../config/environment';
import Ember from 'ember';

export default function startApp(attrs) {
  let application;

  let attributes = Ember.merge({}, Config.APP);
  attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

  Ember.run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}

