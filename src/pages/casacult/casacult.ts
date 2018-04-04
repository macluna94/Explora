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
  data = [];
  //dog = [null];


 
  rutas = [] // Rutas
  festivales = [] // Festivales
  naturales = []
  magicos = []
  arqueo = []


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataitem = navParams.data.dataitem;

    this.rutas = [
      {
        'id': '1',
        'title': 'Rutas Historica',
        'description': 'Es uno de los circuitos turísticos más ricos e interesantes de México, integrado por San Miguel de Allende, Guanajuato y Dolores Hidalgo, Cuna de la Independencia Nacional, ciudades que guardan algunas de las más importantes páginas de la Historia Nacional',
        'img': 'historica.jpg'
      },
      {
        'id': '2',
        'title': 'Ruta Conventos',
        'description': 'Históricamente, la región sur del Estado de Guanajuato se distinguió como asiento de algunas de las más tempranas fundaciones españolas en el llamado Nuevo Mundo. Integrada por los municipios de Acámbaro, Salvatierra y Yuriria',
        'img': 'conventos.jpg'
      },
      {
        'id': '3',
        'title': 'Ruta Aventura',
        'description': 'El estado es una tierra de contrastes cuya diversidad cultural y paisajista se hace evidente a cada paso. El estado es una tierra de contrastes cuya diversidad cultural y paisajista se hace evidente a cada paso',
        'img': 'aventura.jpeg'
      }
    ]
    this.festivales = [
      {
        'id': '1',
        'title': 'Festival de Leon',
        'description': 'En esta feria tienen lugar exposiciones artesanales, gastronómicas, comerciales y ganaderas que se suman a la fiesta de León',
        'img': 'f_leon.jpg'
      },
      {
        'id': '2',
        'title': 'Festival Medieval',
        'description': 'El Festival Medieval de Guanajuato es un evento de recreacionismo medieval',
        'img': 'f_medieval.png'
      },
      {
        'id': '3',
        'title': 'Festival internacional del Globo',
        'description': 'El Festival Internacional de Globo se lleva a cabo en el mes de noviembre en el parque metropolitano de la Ciudad de León Guanajuato, México',
        'img': 'f_globo.jpg'
      },
      {
        'id': '4',
        'title': 'Cervantino',
        'description': 'El Festival Internacional Cervantino (FIC.), popularmente conocido como «Cervantino», se realiza todos los años en la ciudad de Guanajuato',
        'img': 'f_cervantino.jpg'
      }
    ]
    this.naturales = [
      {
        'id': '1',
        'title': 'Region Volcanica',
        'description': 'Ubicados en Valle de Santiago, Guanajuato, se encuentran 7 volcanes extintos',
        'img': 'volcanica.jpg'
      },
      {
        'id': '2',
        'title': 'Laguna de Yuriria',
        'description': 'La Laguna de Yuriria, que es una laguna artificial, se localiza en los Valles Abajeños',
        'img': 'laguna_yuriria.jpg'
      },
      {
        'id': '3',
        'title': 'Cerro del Cubilete',
        'description': 'El cerro del Cubilete es una montaña en el municipio de Silao',
        'img': 'cubilete.jpg'
      },
      {
        id: '4',
        title: 'Las Musas',
        description: 'Área Natural Protegida ubica en el municipio de Manuel Doblado',
        img: 'musas.jpg'
      },
      {
        id: '5',
        title: 'Cerro de Palenque',
        description: 'Ubicado en el Municipio de Purísima del Rincón',
        img: 'palenque.jpg'
      }
    ]
    this.magicos = [
      {
        id: '1',
        title: 'Yuriria',
        description: '',
        img: 'yuriria.jpg'
      },
      {
        id: '2',
        title: 'Jalpa de Canovas',
        description: '',
        img: 'jalpa.jpg'
      },
      {
        id: '3',
        title: 'Salvatierra',
        description: '',
        img: 'salvatierra.jpg'
      },
      {
        id: '4',
        title: 'Mineral de Pozos',
        description: '',
        img: 'pozos.jpg'
      },
      {
        id: '5',
        title: 'Dolores Hidalgo',
        description: '',
        img: 'dolores.jpg'
      }
    ]
    this.arqueo = [
      {
        id: '1',
        title: 'Plazuelas',
        description: 'Ubicado en la comunidad de San Juan El Alto Plazuelas, a pocos kilómetros al oeste de la ciudad de Pénjamo',
        img: 'plazuelas.jpg'
      },
      {
        id: '2',
        title: 'Peralta',
        description: 'Ubicado en las cercanías de la comunidad de Peralta, municipio de Abasolo, a unos cuantos kilómetros al este de la cabecera municipal.',
        img: 'peralta.jpg'
      },
      {
        id: '3',
        title: 'Coporo',
        description: 'Ubicado cerca de la comunidad de San José del Torreón, a unos 15 kilómetros al sur del Municipio de Ocampo ',
        img: 'coporo.jpg'
      },
      {
        id: '4',
        title: 'Cañada de la Virgen',
        description: 'Ubicado a 16 km al suroeste de la ciudad de San Miguel de Allende',
        img: 'canada_virgen.JPG'
      }
    ]



  if (this.dataitem.array == 'rut') {
    console.log("RUTAS");
    this.data = this.rutas;

  }
  else if (this.dataitem.array == 'festi') {
    console.log("FESTIVALES");
    this.data = this.festivales;
    console.log(this.data);
    

  }
  else if (this.dataitem.array == 'natura') {
    console.log("NATURALEZA");
    this.data = this.naturales;

  }
  else if (this.dataitem.array == 'magicos') {
    console.log("MAGICOS");
    this.data = this.magicos;

  }
  else if (this.dataitem.array == 'arqueo') {
    console.log("ARQUEOLOGIa");
    this.data = this.arqueo;

  }
  else {
    //console.log("ERROR......");
    
  }

    
   // console.log(this.data)
}

  paragon(items) {
    this.navCtrl.push(PageCultPage, { items: items });
    
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad CasacultPage');
  }

}
