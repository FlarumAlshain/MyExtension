<?php

/*
 * This file is part of fof/links.
 *
 * Copyright (c) 2018 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace flarumalshain\myextension\Command;

use Flarum\User\AssertPermissionTrait;
use flarumalshain\myextension\Odeme;
use flarumalshain\myextension\OdemeValidator;

class CreateOdemeHandler
{
    use AssertPermissionTrait;

    /**
     * @var OdemeValidator
     */
    protected $validator;

    /**
     * @param OdemeValidator $validator
     */
    public function __construct(OdemeValidator $validator)
    {
        $this->validator = $validator;
    }

    /**
     * @param CreateOdeme $command
     * @return Odeme
     */
    public function handle(CreateOdeme $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $this->assertRegistered($actor);

        $odeme = Odeme::build(
            array_get($data, 'attributes.kullanici'),
            array_get($data, 'attributes.para'),
            array_get($data, 'attributes.advesoyad'),
            array_get($data, 'attributes.iban'),
            array_get($data, 'attributes.durum')
        );

        $this->validator->assertValid($odeme->getAttributes());

        $odeme->save();

        return $odeme;
    }
}
