import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-page-cult',
  templateUrl: 'page-cult.html',
})
export class PageCultPage {

items;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.items = navParams.data.items; 


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageCultPage');
  }

}
