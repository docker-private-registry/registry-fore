import AuthMixin from 'ember-simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Route.extend(AuthMixin, {
  sessionAccount  : service('session-account'),

  beforeModel() {
    return this.get('sessionAccount').loadCurrentAccount();
  },

  sessionAuthenticated(...args) {
    this._super(args);

    this.get('sessionAccount').
         loadCurrentAccount().
         catch(() => this.get('session').invalidate());
  }
});

