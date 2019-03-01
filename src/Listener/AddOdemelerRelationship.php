<?php

/*
 * This file is part of fof/links.
 *
 * Copyright (c) 2018 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace flarumalshain\myextension\Listener;

use Flarum\Api\Controller\ShowForumController;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Event\WillGetData;
use Flarum\Event\GetApiRelationship;
use Flarum\Api\Event\WillSerializeData;
use Flarum\Settings\SettingsRepositoryInterface;
use flarumalshain\myextension\Api\Serializer\OdemeSerializer;
use flarumalshain\myextension\Odeme;
use Illuminate\Contracts\Events\Dispatcher;

class AddOdemelerRelationship
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(GetApiRelationship::class, [$this, 'GetApiRelationship']);
        $events->listen(WillSerializeData::class, [$this, 'WillSerializeData']);
        $events->listen(WillGetData::class, [$this, 'includeOdemelerRelationship']);
    }

    /**
     * @param WillSerializeData $event
     */
    public function GetApiRelationship(GetApiRelationship $event)
    {
        if ($event->isRelationship(ForumSerializer::class, 'odemeler')) {
            return $event->serializer->hasMany($event->model, OdemeSerializer::class, 'odemeler');
        }
    }

    /**
     * @param WillSerializeData $event
     */
    public function WillSerializeData(WillSerializeData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->data['odemeler'] = Odeme::get();
        }
    }

    /**
     * @param WillGetData $event
     */
    public function includeOdemelerRelationship(WillGetData $event)
    {
        if ($event->isController(ShowForumController::class)) {
            $event->addInclude(['odemeler']);
        }
    }
}
