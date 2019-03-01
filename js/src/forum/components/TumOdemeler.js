import app from 'flarum/app';
import Page from 'flarum/components/Page';
import IndexPage from 'flarum/components/IndexPage'

export default class TumOdemeler extends Page {

    view() {
        return (
            <div className="OdemelerPage">
                <div className='TagsPage'>
                    {IndexPage.prototype.hero()}                <div className="OdemelerPage-list">
                </div>
                    <div className="container">
                        <div className="OdemeItems" style="text-align: center;margin-top:15px;">
                        </div>
                        <table style="width:100%;margin-bottom:15px">
                            <tr>
                                <th style="width:25%;text-align:center"><u>Kullanıcı Adı</u></th>
                                <th style="width:25%;text-align:center"><u>Yatırılacak Para</u></th>
                                <th style="width:25%;text-align:center"><u>Tarih</u></th>
                                <th style="width:25%;text-align:center"><u>Durum</u></th>
                            </tr>
                        </table>

                        {(app.store.all('odemeler')).reverse().map(OdemeItem)}
                    </div>
                </div>
            </div>
        );
    }
}

function OdemeItem(odeme) {
    let $date=odeme.zaman();

    return (
        <li style="width:100%;list-style:none" data-id={odeme.id()}>
            <table style="width:100%">
            <tr>
                <td style="width:25%;text-align:center">{odeme.kullanici()}</td>
                <td style="width:25%;text-align:center">{odeme.para()} TL</td>
                <td style="width:25%;text-align:center">{$date}</td>
                <td style="width:25%;text-align:center">{odeme.durum()}</td>
            </tr>
            </table>
            <hr style="margin-top: 10px;margin-bottom: 10px;"></hr>
        </li>
    );
}