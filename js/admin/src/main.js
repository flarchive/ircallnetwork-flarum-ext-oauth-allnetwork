import app from 'flarum/app';

import AllNetworkSettingsModal from 'allnetwork/oauth/allnetwork/components/AllNetworkSettingsModal';

app.initializers.add('allnetwork-oauth-allnetwork', app => {
  app.extensionSettings['allnetwork-oauth-allnetwork'] = () => app.modal.show(new AllNetworkSettingsModal());
});
