import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Jsn1Provider } from '../../providers/jsn1/jsn1';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

usuarios


item;

  constructor(public navCtrl: NavController, public proveedor: Jsn1Provider) {

  }
  ionViewDidLoad() {
    this.proveedor.getData()
      .subscribe(
        (data) => { this.usuarios = data; },
        (error) => { console.log(error); }
      )
  }

}
