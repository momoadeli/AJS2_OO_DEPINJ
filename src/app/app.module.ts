import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MyParentComponent } from "./parent-child/myparent.component"
import { MyChildComponent1 } from "./parent-child/mychild1.component"
import { MyChildComponent2 } from "./parent-child/mychild2.component"
import { MyChildComponent3 } from "./parent-child/mychild3.component"
import { SimpleService } from './parent-child/simple.service'


@NgModule({
  declarations: [
    AppComponent,

    MyParentComponent,
    MyChildComponent1,
    MyChildComponent2,
    MyChildComponent3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SimpleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
