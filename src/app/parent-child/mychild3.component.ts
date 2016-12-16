import { Component } from '@angular/core';
import { MyParentComponent } from "./myparent.component"
import { SimpleService } from "./simple.service"

@Component({
  selector: 'my-child3',
  templateUrl: './mychildx.component.html',
  styleUrls: ['./mychildx.component.css']
})
export class MyChildComponent3 extends MyParentComponent {
  title = 'child 3 class';

  	constructor(protected simpleService: SimpleService) {

  		super(simpleService);
  	}  
}


