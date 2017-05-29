'use strict';

System.register('ircallnetwork/oauth/allnetwork/components/AllNetworkSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, AllNetworkSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      AllNetworkSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(AllNetworkSettingsModal, _SettingsModal);

        function AllNetworkSettingsModal() {
          babelHelpers.classCallCheck(this, AllNetworkSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (AllNetworkSettingsModal.__proto__ || Object.getPrototypeOf(AllNetworkSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(AllNetworkSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'AllNetworkSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('ircallnetwork-oauth-allnetwork.admin.allnetwork_settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('ircallnetwork-oauth-allnetwork.admin.allnetwork_settings.client_id_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('ircallnetwork-oauth-allnetwork.app_id') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('ircallnetwork-oauth-allnetwork.admin.allnetwork_settings.client_secret_label')
              ),
              m('input', { className: 'FormControl', bidi: this.setting('ircallnetwork-oauth-allnetwork.app_secret') })
            )];
          }
        }]);
        return AllNetworkSettingsModal;
      }(SettingsModal);

      _export('default', AllNetworkSettingsModal);
    }
  };
});;
'use strict';

System.register('ircallnetwork/oauth/allnetwork/main', ['flarum/app', 'ircallnetwork/oauth/allnetwork/components/AllNetworkSettingsModal'], function (_export, _context) {
  "use strict";

  var app, AllNetworkSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_ircallnetworkOauthAllnetworkComponentsAllNetworkSettingsModal) {
      AllNetworkSettingsModal = _ircallnetworkOauthAllnetworkComponentsAllNetworkSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('ircallnetwork-oauth-allnetwork', function () {
        app.extensionSettings['ircallnetwork-oauth-allnetwork'] = function () {
          return app.modal.show(new AllNetworkSettingsModal());
        };
      });
    }
  };
});