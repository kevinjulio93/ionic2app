import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Inicio} from '../pages/inicio/inicio';
import {Contacto} from '../pages/contacto/contacto';
import {Perfiles} from '../pages/perfiles/perfiles';
import {Acerca} from '../pages/acerca/acerca';
import {Canciones} from '../pages/canciones/canciones';
import {PlayLists} from '../pages/play-lists/play-lists';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Inicio,
    Contacto,
    Perfiles,
    Acerca,
    Canciones,
    PlayLists

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Inicio,Contacto,
    Perfiles,
    Acerca,
    Canciones,
    PlayLists
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
