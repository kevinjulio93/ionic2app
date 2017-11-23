import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the Acerca page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-acerca',
  templateUrl: 'acerca.html',
})
export class Acerca {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Acerca');
  }

}
