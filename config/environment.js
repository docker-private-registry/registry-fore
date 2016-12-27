module.exports = function(environment) {
  var ENV = {
    modulePrefix  : 'registry-fore',
    environment   : environment,
    baseURL       : '/',
    locationType  : 'auto',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.apiUrl = 'v1';
  }

  if (environment === 'test') {
    ENV.apiUrl = 'v1';

    // Testem prefers this...
    ENV.baseURL       = '/';
    ENV.locationType  = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS      = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiUrl = 'v1';
  }

  ENV.i18n = {
    defaultLocale : 'zh-CN'
  }

  ENV['ember-simple-auth'] = {
    authenticationRoute         : 'accounts.login',
    routeAfterAuthentication    : 'images.index',
    routeIfAlreadyAuthenticated : 'images.index'
  }

  return ENV;
};

