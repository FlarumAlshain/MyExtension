import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';


export default class GoHome extends Modal {
    init() {
        super.init();

    }

    className() {
        return 'GoHome Modal--small';
    }

    title() {
        return 'Yetersiz Bakiye';
    }

    content() {
        return (
            <div className="Modal-body">
                <div className="Form">
                    <div className="Form-group">
                        <p>Bakiyenizde 20 Lira ve üzeri para bulunduğunda para çekme işlemi gerçekleştirebilirsiniz.</p>
                    </div>
                    <div className="Form-group" style="text-align:center">
                        <Button className="Button Button--primary" loading={this.loading} type="submit">
                            Tamam
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    onsubmit(e) {
        e.preventDefault();

        this.loading = true;
        m.route('/');

    }
}