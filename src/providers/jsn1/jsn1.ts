import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 

@Injectable()
export class Jsn1Provider {

  constructor(public http: HttpClient) {
    console.log('Hello Jsn1Provider Provider');
  }

getData(){
return this.http.get('https://jsonplaceholder.typicode.com/users');
//  return this.http.get('https://merakiton.ddns.net/data/16ba8ca0-a1f5-47e7-9c92-217d79cd7c54/');
}


}
