import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrPage } from './qr';


// npm install ngx-qrcode2 --save
// ionic cordova plugin add phonegap-plugin-barcodescanner
// npm install --save @ionic-native/barcode-scanner




@NgModule({
  declarations: [
    QrPage,
  ],
  imports: [
    IonicPageModule.forChild(QrPage),
  ],
})
export class QrPageModule {}
