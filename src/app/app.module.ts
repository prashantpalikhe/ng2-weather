import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherCardListComponent } from './weather-card-list/weather-card-list.component';
import { SearchComponent } from './search/search.component';
import { WeatherService } from './weather-card/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherCardListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    WeatherService,
    {provide: 'WEATHER_API_URL', useValue: 'https://api.forecast.io/forecast/4891dee8e0ca9cf8fdb7ad6dd07fef9f'},
    {provide: 'GEOCODE_API_URL', useValue: 'https://maps.googleapis.com/maps/api/geocode/json'},
    {provide: 'FLICKR_API_URL', useValue: 'https://api.flickr.com/services/rest'},
    {provide: 'FLICKR_API_KEY', useValue: '8c74a14f2db1073a01ab404ca9275166'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
