import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Allfunction {

  constructor(public http: HttpClient) {
    console.log('Hello Allfunction Provider');
  }

}
