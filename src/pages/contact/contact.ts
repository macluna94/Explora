import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Jsn1Provider } from '../../providers/jsn1/jsn1';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

usuarios

 
go = [];

items;

  constructor(
    public navCtrl: NavController,
    public proveedor: Jsn1Provider,
    public params: NavParams
  ) {
 
  }


  ionViewDidLoad() {
    this.proveedor.getData()
      .subscribe(
        (data) => { this.usuarios = data; },
        (error) => { console.log(error); }
      )
  }

}
