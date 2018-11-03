import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
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
  public turma;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menu: MenuController) {
    
    this.menu.enable(false);
    this.novaChamada = this.navParams.get("novaChamada");
    this.professor = this.navParams.get('professor');
    this.turma = this.navParams.get('turma');
    //this.minhavar = this.novaChamada.index;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidacaoPage');
  }

  finalizar() {
    this.professor.turmas.forEach(t => {
      if (t.nome == this.turma.nome) {
        t.chamadaRealizada = true;
      }
    });
    this.navCtrl.push(EscolhaPage, {professor: this.professor});
  }

  refazer(novaChamada) {
    this.novaChamada = {
      index: 0,
      ///tamanho: turma2.alunos.lenght,
      nome: novaChamada.nome,
      alunos: novaChamada.alunos,
    }

    this.turma.chamadaRealizada = false;

    this.navCtrl.push(Chamada, {professor: this.professor, 
      novaChamada: this.novaChamada,
      turma: this.turma
    });
  }
}
