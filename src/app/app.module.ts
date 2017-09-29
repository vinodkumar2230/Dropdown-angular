import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { UserService } from "./services/user.service";

import { HttpModule } from "@angular/http";
import { StateService } from "./services/state.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule,HttpModule
  ],
  providers: [ UserService,
        StateService,
       ],
  bootstrap: [AppComponent]
})
export class AppModule { }
