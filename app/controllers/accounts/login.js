import Ember from 'ember';

export default Ember.Controller.extend({
  session : Ember.inject.service('session'),

  identification  : '',
  password        : '',

  alertMsg      : '',
  alertPriority : '',

  reset() {
    this.setProperties({
      identification  : '',
      password        : '',
      alertMsg        : '',
      alertPriority   : '' });
  },

  actions : {
    onLogin() {
      const { identification, password } = this.getProperties('identification',
                                                              'password');

      this.get('session').
           authenticate('authenticator:oauth2', identification, password).
           catch((reason) => {
             let errMessage = reason.err_message;

             if (Ember.isEmpty(errMessage)) {
               errMessage = this.get('i18n').t('message-unknown-issue');
             }

             this.setProperties({
               alertMsg       : errMessage,
               alertPriority  : 'alert-danger' });
           });
    }
  }
});

