import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController, Platform } from 'ionic-angular';
import { Validacao } from '..';


@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {
  professores: any[];

  professor: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public menu: MenuController, 
    public alertCtrl: AlertController, 
    public platform: Platform) {
    
    platform.registerBackButtonAction(() => {
      let alert = this.alertCtrl.create({
        title: 'Sair',
        message: 'Deseja realmete sair? ',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
            }
          },
          {
            text: 'Sair',
            handler: () => {
              this.navCtrl.push('LoginPage');
            }
          }
        ]
      });
      alert.present();
    })
    this.menu.enable(false);
    this.professor = this.navParams.get("professor");
  }

  openHome(id) {
    this.navCtrl.setRoot('TabsPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  turmaClicada($event, turma) {
    if (turma.chamadaRealizada == false) {
      this.navCtrl.push('PresencaPage', {professor: this.professor, turma: turma});

    } else {

      var novaChamada = {
        index: 0,
        ///tamanho: turma2.alunos.lenght,
        nome: turma.nome,
        alunos: turma.alunos,
      }

      this.navCtrl.push(Validacao, {professor: this.professor, 
        novaChamada: novaChamada, 
        turma: turma});
    }

  }

  logOut(){

    let alert = this.alertCtrl.create({
      title: 'Sair',
      message: 'Deseja realmete sair? ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Sair',
          handler: () => {
            this.navCtrl.push('LoginPage');
          }
        }
      ]
    });
    alert.present();
  }

}
