import {extend} from 'flarum/extend';
import app from 'flarum/app';
import GetMoneyModal from './components/GetMoneyModal';
import TumOdemeler from './components/TumOdemeler';
import SessionDropdown from 'flarum/components/SessionDropdown';
import Button from 'flarum/components/Button';
import Odeme from "../common/models/Odeme";
import Model from 'flarum/Model';
import DiscussionHero from 'flarum/components/DiscussionHero';
import Discussion from 'flarum/models/Discussion';
import IndexPage from 'flarum/components/IndexPage'
import LinkButton from 'flarum/components/LinkButton'

app.initializers.add('flarumalshain', () => {
    app.routes.flagrowDirectLinksGetMoney = {
        path: '/getmoney',
        component: GetMoneyModal.component(),
    };
});


app.initializers.add('mynew', function () {

    extend(SessionDropdown.prototype, 'items', function (items) {
        items.add('mynew', Button.component({
                children: 'Para Çek',
                icon: 'fas fa-check-circle',
                onclick: function () {
                    app.modal.show(new GetMoneyModal());
                }
            }),
            -1
        );
    });


});

app.initializers.add('odemeler', () => {
    app.store.models.odemeler = Odeme;
});

app.initializers.add('flarumalshain-gorunum', function () {
    Discussion.prototype.views = Model.attribute('views');

    extend(DiscussionHero.prototype, 'items', function(items) {
        const discussion = this.props.discussion;
        items.add('flarumalshain-discussion-views', 'Görüntülenme Sayısı : '+[(discussion.views())]);
    });

});


app.initializers.add('tumodemeler', () => {
    app.store.models.odemeler = Odeme;
    app.routes.odemeler = { path: '/tumodemeler', component: TumOdemeler.component() };



});

extend(IndexPage.prototype, 'navItems', function (items) {
    items.add('tumodemeler',
        LinkButton.component({
            href: app.route('odemeler'),
            children: 'Ödemeler',
            icon: 'fas fa-coins'
        }),
        85
    )
});

