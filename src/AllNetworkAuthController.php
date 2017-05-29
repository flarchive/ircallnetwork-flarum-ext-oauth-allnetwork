<?php

namespace AllNetwork\Auth\AllNetwork;

use Flarum\Forum\AuthenticationResponseFactory;
use Flarum\Forum\Controller\AbstractOAuth2Controller;
use Flarum\Settings\SettingsRepositoryInterface;
use League\OAuth2\Client\Provider\GenericProvider;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class AllNetworkAuthController extends AbstractOAuth2Controller
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param AuthenticationResponseFactory $authResponse
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(AuthenticationResponseFactory $authResponse, SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
        $this->authResponse = $authResponse;
    }

    /**
     * {@inheritdoc}
     */
    protected function getProvider($redirectUri)
    {
        return new GenericProvider([
            'clientId'        => $this->settings->get('allnetwork-oauth-allnetwork.app_id'),
            'clientSecret'    => $this->settings->get('allnetwork-oauth-allnetwork.app_secret'),
            'redirectUri'     => $redirectUri,
            //'approvalPrompt'  => 'force',
            //'hostedDomain'    => $this->settings->get('allnetwork-oauth-allnetwork.app_domain'),
            'accessType'      => 'basic',
            'urlAuthorize'            => 'http://account.localnet/authorize',
            'urlAccessToken'          => 'http://account.localnet/token',
            'urlResourceOwnerDetails' => 'http://account.localnet/resource'
        ]);
    }

    /**
     * {@inheritdoc}
     */
    protected function getAuthorizationUrlOptions()
    {
        return [
            'scope' =>
                [
                    'basic'
                ]
        ];
    }

    /**
     * {@inheritdoc}
     */
    protected function getIdentification(ResourceOwnerInterface $resourceOwner)
    {
        $data = $resourceOwner->toArray();
        return [
            'email' => $data['email']
        ];
    }

    /**
     * {@inheritdoc}
     */
    protected function getSuggestions(ResourceOwnerInterface $resourceOwner)
    {
        $data = $resourceOwner->toArray();
        return [
            'email' => $data['email'],
            'username' => $data['userName']
        ];
    }
}
