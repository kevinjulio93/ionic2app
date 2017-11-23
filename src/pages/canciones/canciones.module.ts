import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Canciones } from './canciones';

@NgModule({
  declarations: [
    Canciones,
  ],
  imports: [
    IonicPageModule.forChild(Canciones),
  ],
})
export class CancionesModule {}
