import { Component } from '@angular/core';
import { MyParentComponent } from "./myparent.component"

@Component({
  selector: 'my-child3',
  templateUrl: './mychildx.component.html',
  styleUrls: ['./mychildx.component.css']
})
export class MyChildComponent3 extends MyParentComponent {
  title = 'position 3 fancy element';
}


