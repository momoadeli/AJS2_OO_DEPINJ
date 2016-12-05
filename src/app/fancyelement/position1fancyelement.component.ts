import { Component } from '@angular/core';
import { FancyElmenentBase } from "./fancyelementbase.component"

@Component({
  selector: 'pos1-fancy-element',
  templateUrl: './position1fancyelement.component.html',
  styleUrls: ['./position1fancyelement.component.css']
})
export class Position1FancyElementComponent extends FancyElmenentBase{
  title = 'position 1 fancy element';
}


