import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablaPipesComponent } from './components/tabla-pipes/tabla-pipes.component';


//PIPES
 import { PalabraPipe } from './pipes/palabra.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TablaPipesComponent,
    PalabraPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
