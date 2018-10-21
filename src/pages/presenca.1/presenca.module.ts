import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresencaPage } from './presenca';

@NgModule({
  declarations: [
    PresencaPage,
  ],
  imports: [
    IonicPageModule.forChild(PresencaPage),
  ],
})
export class PresencaPageModule {}
