import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {
  professores: any[];

  professor: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.professor = this.navParams.get("professor");
    console.log(this.professor);
  }

  openHome(id) {
    this.navCtrl.setRoot('TabsPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  turmaClicada($event, turma) {
    this.navCtrl.push('PresencaPage', {professor: this.professor, turma: turma});
    
  }

}
