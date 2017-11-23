import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
/**
 * Generated class for the Inicio page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class Inicio{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Inicio');
  }

}
