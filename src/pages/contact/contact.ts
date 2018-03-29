import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Jsn1Provider } from '../../providers/jsn1/jsn1';

import { HomePage } from "../home/home";

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
    this.items = params.data.items; 
  
    this.go.push(this.items);


    console.log(this.go);
  }

recarga(){
  console.log(this.go);
}

  ionViewDidLoad() {
    this.proveedor.getData()
      .subscribe(
        (data) => { this.usuarios = data; },
        (error) => { console.log(error); }
      )
  }

}
