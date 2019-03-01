import Model from 'flarum/Model';
import mixin from 'flarum/utils/mixin';

export default class Odeme extends mixin(Model, {
    kullanici: Model.attribute('kullanici'),
    para: Model.attribute('para'),
    advesoyad: Model.attribute('advesoyad'),
    iban: Model.attribute('iban'),
    zaman: Model.attribute('zaman'),
    durum: Model.attribute('durum')
}) {}
