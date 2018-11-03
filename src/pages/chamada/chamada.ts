import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chamada } from '..';
import { Validacao } from '..'
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';



@IonicPage()
@Component({
  selector: 'page-chamada',
  templateUrl: 'chamada.html',
})
export class ChamadaPage {

 public novaChamada;
 public aux;
 public professor;
 //public minhavar;
 loaded:   boolean = false;
 tabIndex: number  = 0;

  constructor(private nativePageTransitions: NativePageTransitions,public navCtrl: NavController, public navParams: NavParams) {
    debugger;
    this.novaChamada = this.navParams.get("novaChamada");
    this.professor = this.navParams.get("professor");
    //this.minhavar = this.novaChamada.index;
  }

  ionViewDidLoad() {
    // debugger;
    
  }

  private getAnimationDirection(index):string {
    var currentIndex = this.tabIndex;
  
    this.tabIndex = index;
  
    switch (true){
      case (currentIndex < index):
        return('left');
      case (currentIndex > index):
        return ('right');
    }
  }

  public transition(e):void {
    let options: NativeTransitionOptions = {
     direction:this.getAnimationDirection(e.index),
     duration: 250,
     slowdownfactor: -1,
     slidePixels: 0,
     iosdelay: 20,
     androiddelay: 0,
     fixedPixelsTop: 0,
     fixedPixelsBottom: 48
    };
  
    if (!this.loaded) {
      this.loaded = true;
      return;
    }
  
    this.nativePageTransitions.slide(options);
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
    this.navCtrl.push(Validacao, {professor: this.professor, novaChamada: this.novaChamada});
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
        this.navCtrl.push(Chamada, {professor: this.professor , novaChamada : this.novaChamada});
      }else {
        this.finalizar();
      }
    }

  }


}
