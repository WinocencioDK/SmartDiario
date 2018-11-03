import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the ConteudoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conteudo',
  templateUrl: 'conteudo.html',
})
export class ConteudoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {

    this.menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConteudoPage');
  }

}
