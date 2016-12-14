
import { Component } from '@angular/core';
import { SimpleService } from "./simple.service"


@Component({
  selector: 'my-parent',
  templateUrl: './myparent.component.html',
  styleUrls: ['./myparent.component.css'],

})
export class MyParentComponent {

	title="Base Class element"

	constructor(protected simpleService: SimpleService) {

		console.log(simpleService);
	}

	somethingBase() {

		alert('clicked on: ' + this.title);
		return this;
	}

}


