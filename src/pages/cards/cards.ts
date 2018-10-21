import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  professores: any[];

  constructor(public navCtrl: NavController) {
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
                        nome: 'Felipe Batistela'
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
                                presente: false
                            }
                        ]
                    }
                ]
            }
        ]
      }
  ]

  }
}
