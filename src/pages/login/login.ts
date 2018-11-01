import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { ProfProvider } from '../../providers/prof/prof';

import { User } from '../../providers';
import { MainPage } from '../';

import { Api } from '../../providers/api/api'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    ProfProvider,
    Api
]
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: '',
    password: ''
  };

  public professores;


  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public api: Api) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })

    this.carregaProfessores();
  }

  autentica() {
    this.professores.forEach(professor => {

      if (professor.login == this.account.email &&
         professor.senha == this.account.password) {

          //  console.log(true);
           this.navCtrl.push(MainPage,{professor: professor});

         } else {

          let toast = this.toastCtrl.create({
            message: 'Usuário ou senha inválida, digite novamente.',
            duration: 3000,
            position: 'top'
          });
          toast.present();

         }
    });
  }

  carregaProfessores() {
    this.api.get('')
    .subscribe(
      data => {
        const response = (data as any);
        // console.log(response.professores);
        this.professores = response.professores;
      }, error => {
        console.log(error);
      }
      );
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage,{account: this.account.email}, {
        
      });
    }, (err) => {
      this.navCtrl.push(MainPage, {account: this.account.email});
      
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }


}
