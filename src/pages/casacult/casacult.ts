import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PageCultPage } from "../page-cult/page-cult";

@IonicPage()
@Component({
  selector: 'page-casacult',
  templateUrl: 'casacult.html',
})
export class CasacultPage {

  dataitem;
  fog = [];
  //dog = [null];



  cult = [];
  ecol = [];
  arqui = [];
  igle = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataitem = navParams.data.dataitem;

  

    this.igle = [
      {
        'id': '1',
        'title': 'Templo de San Diego(biblioteca)',
        'description': 'YGpnPjEwOjclcHZhamc-NjpnZmUzYTM6N2UwYDEyMGJhYTQ6ZWAyJXNid2tqZz41MD',
        'img': '1.png'
      },
      {
        'id': '2',
        'title': 'Mausoleo Ortega',
        'description': 'YGpnPjEwOjclcHZhamc-NjpnZmUzYTM6N2UwYDEyMGJhYTQ6ZWAyJXNid2tqZz41MD',
        'img': '2.png'
      },
      {
        'id': '3',
        'title': 'Jardin Principal',
        'description': 'YGpnPjEwOjclcHZhamc-NjpnZmUzYTM6N2UwYDEyMGJhYTQ6ZWAyJXNid2tqZz41MD',
        'img': '3.png'
      },
      {
        'id': '4',
        'title': 'Estatua Hidalgo',
        'description': 'YGpnPjEwOjclcHZhamc-NjpnZmUzYTM6N2UwYDEyMGJhYTQ6ZWAyJXNid2tqZz41MD',
        'img': '4.jpg'
      },
      {
        'id': '5',
        'title': 'Kiosko',
        'description': 'YGpnPjEwOjclcHZhamc-NjpnZmUzYTM6N2UwYDEyMGJhYTQ6ZWAyJXNid2tqZz41MD',
        'img': '5.gif'
      },
      {
        'id': '6',
        'title': 'Casa de Cultura',
        'description': 'YGpnPjEwOjclcHZhamc-NjpnZmUzYTM6N2UwYDEyMGJhYTQ6ZWAyJXNid2tqZz41MD',
        'img': '6.png'
      },
      {
        'id': '7',
        'title': 'Plaza de Toros',
        'description': 'YGpnPjEwOjclcHZhamc-NjpnZmUzYTM6N2UwYDEyMGJhYTQ6ZWAyJXNid2tqZz41MD',
        'img': '7.jpg'
      },
      {
        'id': '8',
        'title': 'Museo',
        'description': 'YGpnPjEwOjclcHZhamc-NjpnZmUzYTM6N2UwYDEyMGJhYTQ6ZWAyJXNid2tqZz41MD',
        'img': '404.png'
      }
    ]

    this.arqui = [
      {
        'id': '1',
        'title': 'Estatua Miguel Hidalgo',
        'description': '',
        'img': '1.png'
      },
      {
        'id': '2',
        'title': 'Busto Benito Juarez',
        'description': '',
        'img': '2.png'
      },
      {
        'id': '3',
        'title': 'Arcos Plaza de Toros',
        'description': '',
        'img': '3.png'
      },
      {
        'id': '4',
        'title': 'Presidencia Municipal',
        'description': '',
        'img': '4.jpg'
      },
      {
        'id': '5',
        'title': 'Plaza de Toros',
        'description': '',
        'img': '5.gif'
      }
    ]

    this.cult = [
      {
        'id': '1',
        'title': 'Pintura',
        'description': '',
        'img': '1.png'
      },
      {
        'id': '2',
        'title': 'Musica',
        'description': '',
        'img': '2.png'
      },
      {
        'id': '3',
        'title': 'Baile',
        'description': '',
        'img': '3.png'
      }
    ]

    this.ecol = [
      {
        'id': '1',
        'titile': 'Villa Lobos',
        'description': '',
        'img': '1.png'
      },
      {
        'id': '2',
        'titile': 'Rio Jaloco',
        'description': '',
        'img': '2.png'
      },
      {
        'id': '3',
        'titile': 'Campanario',
        'description': '',
        'img': '3.png'
      }
    ]

//console.log(this.dataitem.array);


if (this.dataitem.array == 'cult') {
  console.log("CULTURA");
  this.fog = this.cult;

}
else if (this.dataitem.array == 'arqui') {
  console.log("ARQUITECTURA");
  this.fog = this.arqui;

}
else if (this.dataitem.array == 'igle') {
  console.log("IGLESIAS");
  this.fog = this.igle;

}
else if (this.dataitem.array == 'ecol') {
  console.log("IGLESIAS");
  this.fog = this.ecol;

}
else {
  //console.log("ERROR......");
  
}

    
   // console.log(this.fog)
  }

  paragon(items) {
    this.navCtrl.push(PageCultPage, { items: items });
    
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CasacultPage');
  }

}
