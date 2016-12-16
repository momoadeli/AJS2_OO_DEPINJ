import { Component } from '@angular/core';
import { MyParentComponent } from "./myparent.component"
import { SimpleService } from "./simple.service"

@Component({
  selector: 'my-child2',
  templateUrl: './mychildx.component.html',
  styleUrls: ['./mychildx.component.css']
})
export class MyChildComponent2 extends MyParentComponent {
  title = 'child 2 class';

  	constructor(protected simpleService: SimpleService) {

  		super(simpleService);
  	}  
}


