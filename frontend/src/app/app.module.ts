import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';
import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ 
    RouterModule.forRoot(appRoutes),
    BrowserModule, 
    HttpClientModule,
    FormsModule, 
    BrowserAnimationsModule, 
    MaterialModule 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
