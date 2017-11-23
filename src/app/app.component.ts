import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Inicio } from '../pages/inicio/inicio';
import { Contacto } from '../pages/contacto/contacto';
import { Perfiles } from '../pages/perfiles/perfiles';
import { Acerca } from '../pages/acerca/acerca';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') content: Nav;
  public rootPage: any;
  public pages: Array<{ titulo: string, component: any, icon: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.rootPage = Inicio;

    this.pages = [
      { titulo: 'Inicio', component: Inicio, icon: 'home' },
      { titulo: 'Perfiles', component: Perfiles, icon: 'person' },
      { titulo: 'Contacto', component: Contacto, icon: 'mail' },
      { titulo: 'Acerca', component: Acerca, icon: 'information-circle' },
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  GoToPage(page) {
    this.content.setRoot(page);
  }
}


