import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { Jsn1Provider  } from '../../providers/jsn1/jsn1';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  qrdata = null;
  createdcode = null;
  scannedcode = null;

  constructor(public navCtrl: NavController,public proveedor:Jsn1Provider, private barcode: BarcodeScanner, public alertas: AlertController,public tostaCtrl: ToastController) {}
 

 
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


}