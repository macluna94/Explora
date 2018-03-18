import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { QrPage } from '../pages/qr/qr';

import { CasacultPage } from "../pages/casacult/casacult";
import { PageCultPage } from "../pages/page-cult/page-cult";

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Proveedor1Provider } from '../providers/proveedor1/proveedor1';
import { HttpClientModule } from '@angular/common/http';
import { Jsn1Provider } from '../providers/jsn1/jsn1';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCG1D6OvbMADRn7-TN2TB7Ifleo3h9lxdA",
  authDomain: "explora-test-080494.firebaseapp.com",
  databaseURL: "https://explora-test-080494.firebaseio.com",
  projectId: "explora-test-080494",
  storageBucket: "explora-test-080494.appspot.com",
  messagingSenderId: "638027801575"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CasacultPage,
    QrPage,
    PageCultPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CasacultPage,
    QrPage,
    PageCultPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Jsn1Provider,
    BarcodeScanner,
    NgxQRCodeModule,
    AuthProvider
  ]
})
export class AppModule {}
