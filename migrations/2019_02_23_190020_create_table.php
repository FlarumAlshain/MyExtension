<?php
/*
 * This file is part of fof/pages.
 *
 * Copyright (c) 2019 FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;
return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('odemeler')) {
            return;
        }
        $schema->create('odemeler', function (Blueprint $table) use ($schema) {
            $table->increments('id');
            $table->string('kullanici', 200);
            $table->string('para', 200);
			$table->string('advesoyad', 200);
			$table->string('iban', 200);
            $table->dateTime('zaman');
            $table->string('durum', 200);
            Migration::fixIndexNames($schema, $table);
        });
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('odemeler');
    },
];