import Ember from 'ember';
import UnauthMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthMixin, {
  resetController(controller, isExiting) {
    if (isExiting) {
      controller.reset();
    }
  }
});

