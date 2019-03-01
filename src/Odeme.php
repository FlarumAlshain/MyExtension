<?php

namespace flarumalshain\myextension;

use Carbon\Carbon;
use Flarum\Database\AbstractModel;
use function MongoDB\BSON\toJSON;

/**
 * Create a new odeme.
 *
 * @param string $kullanici
 * @param string $para
 * @param string $advesoyad
 * @param string $iban
 * @property  Carbon $zaman
 * @param string $durum
 * @return static
 */

class Odeme extends AbstractModel
{
    /**
     * {@inheritdoc}
     */
    protected $table = 'odemeler';

    /**
     * @var array
     */
    protected $casts = [
        'id' => 'integer'
    ];

    public static function build($kullanici, $para, $advesoyad, $iban, $durum)
    {
        $odeme = new static;
        $now=Carbon::now('Europe/Istanbul');

        $odeme->kullanici      = $kullanici;
        $odeme->para           = $para;
        $odeme->advesoyad      = $advesoyad;
        $odeme->iban           = $iban;
        $odeme->zaman          = $now;
        $odeme->durum          = $durum;

        return $odeme;
    }
}
