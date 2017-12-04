import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlayLists } from '../play-lists/play-lists';
import { DeezerService } from '../../providers/deezer-service'

/**
 * Generated class for the Perfiles page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers : [DeezerService]
})
export class Perfiles {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds:DeezerService) {
  }

  goToplaylist(idusuario) {

    this.navCtrl.push(PlayLists, { idusuario: idusuario });

  }

  ionViewDidLoad() {
    this.ds.getprofilesid();
    console.log('ionViewDidLoad Perfiles');
  }

}
