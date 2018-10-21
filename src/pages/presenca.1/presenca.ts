import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PresencaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presenca',
  templateUrl: 'presenca.html',
})
export class PresencaPage {
  public turma

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.turma = this.navParams.get("turma");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresencaPage');
  }

}
