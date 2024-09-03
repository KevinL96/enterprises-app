// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { EnterprisesComponent } from './enterprises/enterprises.component';
import { DataService } from './services/data.service';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule

@NgModule({
  
  imports: [
    BrowserModule,
    AppComponent ,
    EnterprisesComponent,
    CommonModule ,
    MatIconModule,

  ],
  providers: [DataService],

})
export class AppModule { }