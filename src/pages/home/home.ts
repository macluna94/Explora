import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';


// Modal
import { ModalController, ViewController, NavParams  } from "ionic-angular";
import { ModalPage } from "../modal/modal";

import { ContactPage } from "../contact/contact";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



resultado;

  item;
items = null;
  constructor(
    public auth: AuthProvider,
    public navCtrl: NavController,
    public alertas: AlertController,
    public tostaCtrl: ToastController,
    public modales: ModalController,
    public viewCrt: ViewController, 
    public params: NavParams
  )
  {
  
  }
 


  cerrarSesion() {
    this.auth.logout();
  }

  extra(items) {
    this.navCtrl.push(ContactPage, { items: items });

  }

  presentModal(item){
    let modal = this.modales.create(ModalPage, { item: item } );
    modal.present();
  }

}