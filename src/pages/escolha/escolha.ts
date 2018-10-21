import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
                nome: '1ºAnoB',
                alunos: [
                    {
                        id: 1,
                        nome: 'Felipe Batistela',
                        presente: false
                    },
                    {
                      id: 2,
                      nome: 'Gilson Oliveria',
                      presente: false
                     },
                     {
                      id: 3,
                      nome: 'WIllian Inocencio',
                      presente: false
                     },
                     {
                      id: 4,
                      nome: 'Robson de Oliveira',
                      presente: false
                     },
                     {
                      id: 5,
                      nome: 'Otavio Augusto',
                      presente: false
                     },
                     {
                      id: 6,
                      nome: 'Vinicius Ferreira',
                      presente: false
                     },
                     {
                      id: 7,
                      nome: 'Felipe Espñol',
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

}
