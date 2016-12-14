import { Component } from '@angular/core';
import { MyParentComponent } from "./myparent.component"
import { SimpleService } from "./simple.service"

@Component({
  selector: 'my-child1',
  templateUrl: './mychildx.component.html',
  styleUrls: ['./mychildx.component.css']
})
export class MyChildComponent1 extends MyParentComponent {
  	title = 'position 1 fancy element';
  	parentService = this.simpleService;

  	constructor(protected simpleService: SimpleService) {

  		super(simpleService);
  	}
  	
}