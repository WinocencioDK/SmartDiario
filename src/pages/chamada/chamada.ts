import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Chamada } from '..';
import { EscolhaPage } from '../escolha/escolha';
import { Validacao } from '..'



@IonicPage()
@Component({
  selector: 'page-chamada',
  templateUrl: 'chamada.html',
})
export class ChamadaPage {

 public novaChamada;
 public aux;
 public professor;
 public turma;
 //public minhavar;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public menu: MenuController) {

    this.menu.enable(false);
    this.novaChamada = this.navParams.get("novaChamada");
    this.professor = this.navParams.get("professor");
    this.turma = this.navParams.get('turma');

    //this.minhavar = this.novaChamada.index;
  }

  ionViewDidLoad() {
    // debugger;
    
  }

  swipe(event) {
    if(event.direction === 4) {

      //Levar para a Direita
      this.chamado(event, "Presente");
    }
    if(event.direction === 2) {
      //Levar para a Esquerda
      this.chamado(event, "Falta");
    }
  }

  finalizar(){
    this.navCtrl.push(Validacao, {professor: this.professor, 
      novaChamada: this.novaChamada, 
      turma: this.turma});
  }

  chamado($event, status) {
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
        this.navCtrl.push(Chamada, {professor: this.professor ,
          novaChamada : this.novaChamada,
          turma: this.turma});
      }else {
        this.finalizar();
      }
    }

  }
}
