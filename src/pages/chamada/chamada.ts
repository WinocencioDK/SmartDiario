import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chamada } from '..';



@IonicPage()
@Component({
  selector: 'page-chamada',
  templateUrl: 'chamada.html',
})
export class ChamadaPage {

 public novaChamada;
 public aux;
 //public minhavar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.novaChamada = this.navParams.get("novaChamada");
    //this.minhavar = this.novaChamada.index;
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ChamadaPage');
  }

  chamado($event, status) {
    if (this.novaChamada.index < this.novaChamada.alunos.length - 1 ) {
      debugger;
      
      this.aux = {
        index: this.novaChamada.index + 1,
        nome: this.novaChamada.nome,
        //tamanho: this.novaChamada.length,
        alunos: this.novaChamada.alunos
      };
      this.aux.alunos[this.novaChamada.index]['status'] = status;
      this.novaChamada = {...this.aux};
      this.navCtrl.push(Chamada, {novaChamada : this.novaChamada});
    } else {
      alert('user: ' + this.novaChamada.alunos[0].status);
      alert('user: ' + this.novaChamada.alunos[1].status);
    }  

  }


}
