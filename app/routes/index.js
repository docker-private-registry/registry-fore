import AuthenticatedMixin from
  'ember-simple-auth/mixins/authenticated-route-mixin';
import Ember from 'ember';

export default Ember.Route.extend(AuthenticatedMixin, {
  redirect() {
    this.transitionTo('images.index');
  }
});

