'use strict';

System.register('allnetwork/oauth/allnetwork/main', ['flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('allnetwork-oauth-allnetwork', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('allnetwork', m(
            LogInButton,
            {
              className: 'Button LogInButton--allnetwork',
              icon: 'hashtag',
              path: '/auth/allnetwork' },
            app.translator.trans('allnetwork-oauth-allnetwork.forum.log_in.with_allnetwork_button')
          ));
        });
      });
    }
  };
});