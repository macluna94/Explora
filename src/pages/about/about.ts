import { Component } from '@angular/core';
import { NavController,AlertController, Events } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CasacultPage } from "../casacult/casacult";

/* Formato de codigo
    #ABC12345

    Cultura: #CULT00001
    Arquitectura: #ARQ00001
    Ecologia: #ECO00001
    Iglesias: #IGL00001
*/

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 
  mainblock = [];
  // btnfind()
  code = '' ;
  block = []
  result
  backresult
  block2 = []

  //
  scannedcode = null;
  i = false


  constructor(
    public navCtrl: NavController,
    private barcode: BarcodeScanner,
    public alertas: AlertController,
    public events: Events
    )
  {
        this.mainblock = [
          {
            'id': '1',
            'array': 'rut',
            'title': 'Rutas',
            'description': '12 ubicaciones',
            'img': 'rutas.png'
          },
          {
            'id': '2',
            'array': 'festi',
            'title': 'Festivales',
            'description': '3 Festivales',
            'img': 'festivales.jpg'
          },
          {
            'id': '3',
            'array': 'natura',
            'title': 'Areas Naturales',
            'description': '5 ubicaciones' ,
            'img': 'sierra_back.jpg'
          },
          {
            id: '4',
            array: 'magicos',
            title: 'Pueblos Magicos',
            description: '5 ubicaciones',
            img: 'magicos.jpg'
          },
          {
            id: '5',
            array: 'arqueo',
            title: 'Arqueologia',
            description: '4 ubicaciones',
            img: 'arqueologia.jpg'
          }
        ]

        this.events.subscribe('scanedcode', (datos) => {
          console.log('Suscrito al evento', datos);

        })
  }  

  btncultura(dataitem){
    this.navCtrl.push(CasacultPage,{ dataitem: dataitem });
  }

  alerta(datos) {
    let alert = this.alertas.create({
      title: 'Alerta',
      subTitle: datos,
      buttons: ['ok']
    });
    alert.present();
    console.log("1a Alerta");
  }

  evento() {
    console.log('Evento publicado')
    this.events.publish('scanedcode', 'Hola Evento')
  }

  btnFind() {
    // Busqueda
    // busca {code} este dentro de los {id} del {block}, el result es igual a {result}
    this.result = this.block.find(data => data.id === this.code.toLowerCase())
    if (this.result != null) {
      if (this.backresult != this.result) { //Evita que se repita el dato escaneado seguido
        this.block2.push(this.result);   // inserta el objeto json en un nuevo bloque
        this.backresult = this.result;
        // Disparador de evento
        if (this.events.publish('eventmac', this.backresult)) {
          console.log('Evento inicial')
        }
        else {
          console.log('Nada')
        }
        //
      }
    }
    else {
      console.log("Incorrecto o nulo");
      console.log("Dato no inyectado");
    }
  }

  scancode() {
    this.barcode.scan().then(barcodeData => {
      this.scannedcode = barcodeData.text;  // Valor de codigo capturado
      this.alerta(this.scannedcode);
      if (this.scannedcode.toLowerCase() == 'macluna') {
        this.i = true;
      }
      else{
        this.i = false
      }
    }, (err) => {
      console.log("error", err);
    }
    )
  }

  push(){
    this.alerta(this.scannedcode);
    this.evento();
  }


}
