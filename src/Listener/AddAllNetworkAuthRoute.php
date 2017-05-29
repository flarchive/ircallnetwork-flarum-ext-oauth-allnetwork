<?php

namespace AllNetwork\Auth\AllNetwork\Listener;

use Flarum\Event\ConfigureForumRoutes;
use Illuminate\Contracts\Events\Dispatcher;

class AddAllNetworkAuthRoute
{
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureForumRoutes::class, [$this, 'configureForumRoutes']);
    }

    /**
     * @param ConfigureForumRoutes $event
     */
    public function configureForumRoutes(ConfigureForumRoutes $event)
    {
        $event->get('/auth/allnetwork', 'auth.allnetwork', 'AllNetwork\Auth\AllNetwork\AllNetworkAuthController');
    }
}
