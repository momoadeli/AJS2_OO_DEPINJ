import { Injectable } from '@angular/core';


@Injectable()
export class SimpleService {

  constructor() { 

  	console.log('singleton instantated');

  }

}
