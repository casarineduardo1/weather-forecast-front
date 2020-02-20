import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//services
import { HttpService } from '../app/services/http.service';
import { ForecastComponent } from './component/forecast/forecast.component';
import { HomeComponent } from './component/home/home.component';
import { SearchCityPipe } from './pipes/search-city.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    HomeComponent,
    SearchCityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
