import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AstronautComponent } from './astronaut.component'
import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AstronautComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
