import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
  
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
   
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }