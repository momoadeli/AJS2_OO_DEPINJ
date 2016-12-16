
import { Component } from '@angular/core';
import { SimpleService } from "./simple.service"


@Component({
  selector: 'my-parent',
  templateUrl: './myparent.component.html',
  styleUrls: ['./myparent.component.css'],

})
export class MyParentComponent {

	title="Parent Class"

	arrRegistered:string[] = [];

	constructor(protected simpleService: SimpleService) {

		console.log(simpleService);
	}

	doSomething() {
		this.arrRegistered = this.simpleService.register(this.title);
		return;
	}

}


