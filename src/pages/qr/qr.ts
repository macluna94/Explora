import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-qr',
  templateUrl: 'qr.html',
})
export class QrPage {
qrData = null;
createdCode = null;
scannedCode = null;


  constructor(private barcodeScanner: BarcodeScanner) {
  }


 
createCode(){
  this.createdCode = this.qrData;
}
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.format;
    }, (err) => {
      console.log('Error: ', err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrPage');
  }

}
