<?php

namespace flarumalshain\myextension;

use Flarum\Extend;
use flarumalshain\myextension\Listener;
use flarumalshain\myextension\Api\Controller;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->route('/getmoney', 'flagrow-direct-links-getmoney')
        ->route('/tumodemeler', 'tumodemeler-deneme'),

    (new Extend\Routes('api'))
        ->post('/odemeler', 'odemeler.create', Controller\CreateOdemeController::class),

    function (Dispatcher $events) {
        $events->subscribe(Listener\AddOdemelerRelationship::class);
    }

];
