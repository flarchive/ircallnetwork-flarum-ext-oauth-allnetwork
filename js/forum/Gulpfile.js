var gulp = require('flarum-gulp');

gulp({
  modules: {
    'allnetwork/oauth/allnetwork': [
      'src/**/*.js'
    ]
  }
});
