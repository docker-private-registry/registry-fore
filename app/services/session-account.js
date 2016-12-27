import Ember from 'ember';

const { inject: { service }, RSVP, isEmpty } = Ember;

export default Ember.Service.extend({
  session : service('session'),
  store   : service(),

  getCurrentAccountId() {
    return this.get('session.data.authenticated.account_id');
  },

  loadCurrentAccount() {
    return new RSVP.Promise((resolve, reject) => {
      const accountId = this.get('session.data.authenticated.account_id');

      if (isEmpty(accountId)) {
        resolve();

        return null;
      }

      return this.store.find('account', accountId).then((account) => {
        this.set('account', account);
        resolve();
      }, reject);
    });
  }
});

