import app from 'flarum/app';
import Modal from 'flarum/components/Modal';
import LogInModal from 'flarum/components/LogInModal';
import Button from 'flarum/components/Button';
import GoHome from "./GoHome";


export default class GetMoneyModal extends Modal {
    init() {
        super.init();
        this.username = m.prop(app.session.user.username());
        this.money = m.prop(app.session.user.attribute('money'));
        this.odeme = this.props.odeme || app.store.createRecord('odemeler');
        this.user = this.props.user;

        this.kullanici = m.prop(this.odeme.kullanici() || '');
        this.para = m.prop(this.odeme.para() || '');
        this.advesoyad = m.prop(this.odeme.advesoyad() || '');
        this.iban = m.prop(this.odeme.iban() || '');
        if (!app.session.user) {
            app.modal.show(new LogInModal());
            return;
        }
    }

    className() {
        return 'UserMoneyModal Modal--small';
    }

    title() {
        return 'Para Çek';
    }

    content() {

        return (
            <div className="Modal-body">
                <div className="Form">
                    <div className="Form-group">
                        <p style="text-align:center">Lütfen Bilgilerinizi Eksiksiz ve Doğru Girin !</p>
                        <p style="text-align:center">Hesabınızda 20 Lira olmadan para çekme işlemi gerçekleşmez.</p>
                        <hr style="border-top: 2px solid #005dff;"></hr>
                        <p>Kullanıcı Adı : {this.username()}</p>
                        <p>Hesabınızdaki Para : {this.money()} TL</p>
                        <p>Ad ve Soyadınız</p>
                        <input required className="FormControl" name="advesoyad" type="text" value=''/>
                        <p>IBAN numaranız</p>
                        <input required className="FormControl" name="iban"
                               pattern='TR\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{2}|TR\d{20}'
                               placeholder="TR__ ____ ____ ____ ____ __"/>
                    </div>
                    <div className="Form-group" style="text-align:center">
                        <Button className="Button Button--primary" loading={this.loading} type="submit">
                            Para Çek
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    onsubmit(e) {
        if ((this.money()) < 20) {
            app.modal.show(new GoHome());
        }

        var advesoyad=document.querySelector('input[name=advesoyad]').value;
        var iban=document.querySelector('input[name=iban]').value;
        var durum='İşlem Sırasında';
        e.preventDefault();
        this.loading = true;

        this.odeme
            .save({
                kullanici: this.username(),
                para: this.money(),
                advesoyad: advesoyad,
                iban: iban,
                durum:durum,
            })
            .then(
                () => this.hide(),
                response => {
                    this.handleErrors(response);
                }
            );
    }
}