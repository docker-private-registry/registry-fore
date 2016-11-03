import Config from './config/environment';
import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

const App = Ember.Application.extend({
  modulePrefix    : Config.modulePrefix,
  podModulePrefix : Config.podModulePrefix,
  Resolver
});

loadInitializers(App, Config.modulePrefix);

export default App;

