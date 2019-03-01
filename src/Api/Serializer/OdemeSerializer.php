<?php

/*
 * This file is part of fof/links.
 *
 * Copyright (c) 2018 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace flarumalshain\myextension\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Flarum\Api\Serializer\DiscussionSerializer;

class OdemeSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'odemeler';

    /**
     * {@inheritdoc}
     */
    protected function getDefaultAttributes($odeme)
    {
        $attributes = [
            'id'             => $odeme->id,
            'kullanici'      => $odeme->kullanici,
            'para'           => $odeme->para,
            'advesoyad'      => $odeme->advesoyad,
            'iban'           => $odeme->iban,
            'zaman'          => $odeme->zaman,
            'durum'          => $odeme->durum,
        ];

        return $attributes;
    }
}
