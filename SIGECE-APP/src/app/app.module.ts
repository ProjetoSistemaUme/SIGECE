import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterOutlet, 
    BrowserModule, 
    InputTextModule, 
    ButtonModule, 
    RadioButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})

export class AppModule { }

