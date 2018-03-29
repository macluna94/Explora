import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CasacultPage } from "../casacult/casacult";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 
backdata = [];

  constructor(public navCtrl: NavController) {
    this.backdata = [
      {
        'id':'1',
        'array': 'cult',
        'title': 'Cultura',
        'description': '3 ubicaciones',
        'img': 'cultura.jpg'
      },
      {
        'id': '2',
        'array': 'ecol',
        'title': 'Ecologia',
        'description': '3 ubicaciones',
        'img': 'sierra_back.jpg'
      },
      {
        'id': '3',
        'array': 'arqui',
        'title': 'Arquitectura',
        'description': '5 ubicaciones',
        'img': 'arqui.jpg'
      },
      {
        'id': '4',
        'array': 'igle',
       'title': 'Iglesias',
       'description': '8 ubicaciones' ,
       'img': 'iglesia_back.jpg'
      }
    ]
  }  

btncultura(dataitem){
  this.navCtrl.push(CasacultPage,{ dataitem: dataitem });
}


}
