import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EscolhaPage } from './escolha';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    EscolhaPage,
  ],
  imports: [
    IonicPageModule.forChild(EscolhaPage),
    TranslateModule.forChild()
  ],
  exports: [
    EscolhaPage
  ]
})
export class EscolhaPageModule {}
