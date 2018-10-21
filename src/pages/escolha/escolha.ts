import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';

/**
 * Generated class for the EscolhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escolha',
  templateUrl: 'escolha.html',
})
export class EscolhaPage {
  professores: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.professores = [
      {
        login: 'antonio',
        senha: 'flavio',
        nome: 'Antonio Flavio',
        turmas : [
            {
                nome: '1A',
                alunos: [
                    {
                        id: 1,
                        nome: 'Felipe Batistela',
                        presente: false
                    },
                    {
                      id: 2,
                      nome: 'WIllian Batistela',
                      presente: false
                     }
                ],
                diarios: [
                    {
                        data: '21/10/2018',
                        conteudo: 'Sujeitos',
                        observacao: 'Joaozinho atrapalhou a aula.',
                        chamada: [
                            {
                                idAluno: 1,
                                
                            }
                        ]
                    }
                ]
            }
        ]
      }
  ]
  }

  openHome(id) {
    this.navCtrl.setRoot('TabsPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  turmaclicada($event, turma) {
    console.log(turma);
    this.navCtrl.push('PresencaPage', {turma: turma});
    
  }

  ionViewDidLoad() {
    var teste = this.navParams.get("account");
  }

}
