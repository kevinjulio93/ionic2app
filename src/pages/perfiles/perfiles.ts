import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlayLists } from '../play-lists/play-lists';

/**
 * Generated class for the Perfiles page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
})
export class Perfiles {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToplaylist(idusuario) {

    this.navCtrl.push(PlayLists, { idusuario: idusuario });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Perfiles');
  }

}
