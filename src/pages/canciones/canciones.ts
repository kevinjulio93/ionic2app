import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the Canciones page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
})
export class Canciones {
  public PlaylistID : number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.PlaylistID = this.navParams.get('playlistid');
    console.log(this.PlaylistID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Canciones');
  }

}
