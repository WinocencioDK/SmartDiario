import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, Platform, AlertController } from 'ionic-angular';

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, 
    public menu: MenuController, 
    public platform: Platform, 
    public alertCtrl: AlertController) { 

    this.menu.enable(false);
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
              platform.exitApp();
            }
          }
        ]
      });
      alert.present();
    })
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

}
