import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HeroDetailComponent} from './hero-detail.component';



import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
      CommonModule,
    BrowserModule,
    FormsModule,
      ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
      HeroDetailComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
