import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Canciones} from '../canciones/canciones';
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

  goToCanciones(playlistid){

    this.navCtrl.push(Canciones, {playlistid: playlistid});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayLists');
  }

}
