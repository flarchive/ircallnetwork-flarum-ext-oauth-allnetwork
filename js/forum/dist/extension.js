'use strict';

System.register('ircallnetwork/oauth/allnetwork/main', ['flarum/extend', 'flarum/app', 'flarum/components/LogInButtons', 'flarum/components/LogInButton'], function (_export, _context) {
  "use strict";

  var extend, app, LogInButtons, LogInButton;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumComponentsLogInButtons) {
      LogInButtons = _flarumComponentsLogInButtons.default;
    }, function (_flarumComponentsLogInButton) {
      LogInButton = _flarumComponentsLogInButton.default;
    }],
    execute: function () {

      app.initializers.add('ircallnetwork-oauth-allnetwork', function () {
        extend(LogInButtons.prototype, 'items', function (items) {
          items.add('allnetwork', m(
            LogInButton,
            {
              className: 'Button LogInButton--allnetwork',
              icon: 'hashtag',
              path: '/auth/allnetwork' },
            app.translator.trans('ircallnetwork-oauth-allnetwork.forum.log_in.with_allnetwork_button')
          ));
        });
      });
    }
  };
});