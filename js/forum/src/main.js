import app from 'flarum/app';
import LogInButtons from 'flarum/components/LogInButtons';
import LogInButton from 'flarum/components/LogInButton';

app.initializers.add('allnetwork-oauth-allnetwork', () => {
  extend(LogInButtons.prototype, 'items', function(items) {
    items.add('allnetwork',
      <LogInButton
        className="Button LogInButton--allnetwork"
        icon="hashtag"
        path="/auth/allnetwork">
        {app.translator.trans('allnetwork-oauth-allnetwork.forum.log_in.with_allnetwork_button')}
      </LogInButton>
    );
  });
});
