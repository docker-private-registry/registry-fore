import Config from './config/environment';
import Ember from 'ember';

const Router = Ember.Router.extend({
  location  : Config.locationType
});

Router.map(function() {
  this.route('accounts', function() {
    this.route('login', { path: '/login' });
  });

  this.route('images');

  return null;
});

export default Router;

