import Ember from 'ember';

const { inject: { service } } = Ember;

export default Ember.Component.extend({
  session         : service('session'),
  sessionAccount  : service('session-account'),

  actions : {
    onLogout() {
      this.get('session').invalidate();
    }
  }
});

