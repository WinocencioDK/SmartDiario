import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import { Chamada } from '..';

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
  public turma2;
  public novaChamada;
  public professor;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
     public menu: MenuController) {

    this.menu.enable(false);
    this.turma2 = this.navParams.get("turma");
    this.professor = this.navParams.get("professor");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresencaPage');
  }

  chamadaOpen($event, turma2) {
    this.novaChamada = {
      index: 0,
      ///tamanho: turma2.alunos.lenght,
      nome: turma2.nome,
      alunos: turma2.alunos,
    }
    
    this.navCtrl.push(Chamada, {professor: this.professor,
      novaChamada : this.novaChamada,
      turma: this.turma2});
  }

}
