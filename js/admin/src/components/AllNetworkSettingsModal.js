import SettingsModal from 'flarum/components/SettingsModal';
import app from 'flarum/app';

export default class AllNetworkSettingsModal extends SettingsModal {
  className() {
    return 'AllNetworkSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('allnetwork-oauth-allnetwork.admin.allnetwork_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('allnetwork-oauth-allnetwork.admin.allnetwork_settings.client_id_label')}</label>
        <input className="FormControl" bidi={this.setting('allnetwork-oauth-allnetwork.app_id')}/>
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('allnetwork-oauth-allnetwork.admin.allnetwork_settings.client_secret_label')}</label>
        <input className="FormControl" bidi={this.setting('allnetwork-oauth-allnetwork.app_secret')}/>
      </div>
    ];
  }
}
