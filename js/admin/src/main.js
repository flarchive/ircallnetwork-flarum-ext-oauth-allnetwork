import app from 'flarum/app';

import AllNetworkSettingsModal from 'ircallnetwork/oauth/allnetwork/components/AllNetworkSettingsModal';

app.initializers.add('ircallnetwork-oauth-allnetwork', () => {
  app.extensionSettings['ircallnetwork-oauth-allnetwork'] = () => app.modal.show(new AllNetworkSettingsModal());
});
