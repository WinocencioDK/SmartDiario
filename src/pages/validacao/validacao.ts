import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EscolhaPage } from '../escolha/escolha';
import { Chamada } from '..';

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

  public novaChamada;
  public professor;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // debugger;
    this.novaChamada = this.navParams.get("novaChamada");
    this.professor = this.navParams.get('professor');
    //this.minhavar = this.novaChamada.index;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidacaoPage');
  }

  finalizar() {
    this.navCtrl.push(EscolhaPage, {professor: this.professor});
  }

  refazer(novaChamada) {
    this.novaChamada = {
      index: 0,
      ///tamanho: turma2.alunos.lenght,
      nome: novaChamada.nome,
      alunos: novaChamada.alunos,
    }

    this.navCtrl.push(Chamada, {professor: this.professor, novaChamada: this.novaChamada});
  }
}
