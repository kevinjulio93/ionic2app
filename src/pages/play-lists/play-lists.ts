import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PlayLists page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-play-lists',
  templateUrl: 'play-lists.html',
})
export class PlayLists {

  public idusuario : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idusuario = this.navParams.get('idusuario');
    console.log(this.idusuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayLists');
  }

}
