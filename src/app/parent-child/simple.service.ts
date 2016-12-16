import { Injectable } from '@angular/core';


@Injectable()
export class SimpleService {

	arrRegistered:string[] = [];

	constructor() { 

		console.log('service singleton instantiated');

	}

	register(strClassName: string): any[] {

		this.arrRegistered.push(strClassName)
		return this.arrRegistered;
	}

}
