import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
item = '';
items = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public viewctrl: ViewController
  ) {
this.item = navParams.data.item ;
this.items = this.item.toUpperCase();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  dismiss() {
    this.viewctrl.dismiss();
  }

}
