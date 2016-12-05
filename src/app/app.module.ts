import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InsertElementComponent } from "./insertelement/insertelement.component"
import { Position1FancyElementComponent } from "./fancyelement/position1fancyelement.component"

@NgModule({
  declarations: [
    AppComponent,
    InsertElementComponent,
    Position1FancyElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
