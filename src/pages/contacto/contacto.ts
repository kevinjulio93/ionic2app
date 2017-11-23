import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the Contacto page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class Contacto {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contacto');
  }

}
