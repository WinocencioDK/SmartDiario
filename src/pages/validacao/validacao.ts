import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EscolhaPage } from '../escolha/escolha';

/**
 * Generated class for the ValidacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validacao',
  templateUrl: 'validacao.html',
})
export class ValidacaoPage {

  public turma2;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    debugger;
    this.novaChamada = this.navParams.get("novaChamada");
    //this.minhavar = this.novaChamada.index;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidacaoPage');
  }

  finalizar() {
    this.navCtrl.push(EscolhaPage);
  }

}
