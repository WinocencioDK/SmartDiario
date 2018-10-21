import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chamada } from '..';
import { EscolhaPage } from '../escolha/escolha';



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
    debugger;
    this.novaChamada = this.navParams.get("novaChamada");
    //this.minhavar = this.novaChamada.index;
  }

  ionViewDidLoad() {
    debugger;
  }

  finalizar(){
    this.navCtrl.push(EscolhaPage);
  }

  chamado($event, status) {
    debugger;
    if (this.novaChamada.index <= this.novaChamada.alunos.length - 1 ) {
      
      
      this.aux = {
        index: this.novaChamada.index + 1,
        nome: this.novaChamada.nome,
        //tamanho: this.novaChamada.length,
        alunos: this.novaChamada.alunos
      };
      this.aux.alunos[this.novaChamada.index]['status'] = status;
      this.novaChamada = {...this.aux};
      debugger;
      if(this.novaChamada.index < this.novaChamada.alunos.length)
      {
        //verifica que o index é igual ao limite.
        this.navCtrl.push(Chamada, {novaChamada : this.novaChamada});
      }
      else
      {
        this.navCtrl.push(EscolhaPage, {novaChamada : this.novaChamada});
      }
      
    }

  }


}
