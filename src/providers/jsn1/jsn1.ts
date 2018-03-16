import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http';
 

@Injectable()
export class Jsn1Provider {

  constructor(public http: HttpClient) {
    console.log('Hello Jsn1Provider Provider');
  }

getData(){
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}


}
