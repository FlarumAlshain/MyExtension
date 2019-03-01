<?php

/*
 * This file is part of fof/links.
 *
 * Copyright (c) 2018 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace flarumalshain\myextension\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use flarumalshain\myextension\Api\Serializer\OdemeSerializer;
use flarumalshain\myextension\Command\CreateOdeme;
use Illuminate\Contracts\Bus\Dispatcher;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class CreateOdemeController extends AbstractCreateController
{
    /**
     * @inheritdoc
     */
    public $serializer = OdemeSerializer::class;

    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        return $this->bus->dispatch(
            new CreateOdeme($request->getAttribute('actor'), array_get($request->getParsedBody(), 'data'))
        );
    }
}
