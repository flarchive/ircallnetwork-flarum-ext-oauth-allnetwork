import { extend } from 'flarum/extend';
import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('ircallnetwork-oauth-allnetwork', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('allnetwork',
      <LogInButton
        className="Button LogInButton--allnetwork"
        icon="hashtag"
        path="/auth/allnetwork">
        {app.translator.trans('ircallnetwork-oauth-allnetwork.forum.log_in.with_allnetwork_button')}
      </LogInButton>
    );
  });
});
