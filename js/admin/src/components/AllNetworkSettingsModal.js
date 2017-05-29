import SettingsModal from 'flarum/components/SettingsModal';

export default class AllNetworkSettingsModal extends SettingsModal {
  className() {
    return 'AllNetworkSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('ircallnetwork-oauth-allnetwork.admin.allnetwork_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('ircallnetwork-oauth-allnetwork.admin.allnetwork_settings.client_id_label')}</label>
        <input className="FormControl" bidi={this.setting('ircallnetwork-oauth-allnetwork.app_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('ircallnetwork-oauth-allnetwork.admin.allnetwork_settings.client_secret_label')}</label>
        <input className="FormControl" bidi={this.setting('ircallnetwork-oauth-allnetwork.app_secret')}/>
      </div>
    ];
  }
}
