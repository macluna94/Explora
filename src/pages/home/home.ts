import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { Jsn1Provider  } from '../../providers/jsn1/jsn1';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

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

  qrdata = null;
  createdcode = null;
  scannedcode = null;

  anime = "";
  anima = [];
  cola = '';
  data = '';

xc = [];


resultado;

  xcode = '';
  list = [];
  item;
items = null;
  constructor(
    public auth: AuthProvider,
    public navCtrl: NavController,
    public proveedor:Jsn1Provider,
    private barcode: BarcodeScanner,
    public alertas: AlertController,
    public tostaCtrl: ToastController,
    public modales: ModalController,
    public viewCrt: ViewController, 
    public params: NavParams
  )
  {
    this.xc = [
      {
        id: 'anime',
        title: 'Anime',
        description: 'Esto es anime',
        img: 'koko' 
      },
      {
        id: 'autos',
        title: 'Autos',
        description: 'Estos son Autos',
        img: 'auto' 
      },
      {
        id: 'dinos',
        title: 'Dinosaurios',
        description: 'Estos son dinosaoruos',
        img: 'dino' 
      }
    ];

    this.list = [
      'mexico', 'japon','nigeria','argelia','canada','argentina'
    ]

  }
 

 
  scancode(){
    this.barcode.scan().then(barcodeData => {
      this.scannedcode = barcodeData.text;
      this.tostada();
    }, (err) =>{
      console.log("error", err);
    }
  )
  }
  createcode(){
    this.createdcode = this.qrdata;
  }
  alerta(){
    let alert = this.alertas.create({
      title: 'Alerta',
      subTitle: 'esto es una alerta de prueba',
      buttons: ['ok']
    });
    alert.present();
    console.log("1a Alerta");
  }
  tostada(){
    let tost= this.tostaCtrl.create({
      message: "Tostada Escanneada",
      duration: 3000,
      position: 'top'
    });
    tost.present();
  }
    cerrarSesion() {
        this.auth.logout();
    }



  click(){
    //console.log("Dato del input: "+ this.anime);

 
    this.search();
    /*
    if (this.anime.toLowerCase() == 'anime') {
      this.anima = this. anime;
    }
    else{
      this.anima = null;
      console.log("Valor incorrecto")
    }
    */
  }

  search(){
    console.log(this.xc[1]);
    this.anima = this.xc[2];

    

  }

  extra(items) {
    this.navCtrl.push(ContactPage, { items: items });

  }

find(){
  //console.log(this.list.indexOf(this.xcode));
  //this.item = this.list.indexOf(this.xcode.toLowerCase());

  /*
  if (this.item != -1) {
    
    this.presentModal(this.list[this.item]);
  }
*/

this.resultado = this.xc.find(fruta => fruta.id === this.xcode.toLowerCase()) ;

if (this.resultado != null) {
  console.log(this.resultado);
  this.extra(this.resultado);
  
}
else{
  console.log("Dato no encontrado");
}



}



presentModal(item){
  let modal = this.modales.create(ModalPage, { item: item } );
  modal.present();

}

}