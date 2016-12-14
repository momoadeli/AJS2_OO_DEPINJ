import { Component } from '@angular/core';
import { MyParentComponent } from "./myparent.component"

@Component({
  selector: 'my-child2',
  templateUrl: './mychildx.component.html',
  styleUrls: ['./mychildx.component.css']
})
export class MyChildComponent2 extends MyParentComponent {
  title = 'position 2 fancy element';
}


