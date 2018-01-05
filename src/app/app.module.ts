import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {JsonpModule} from '@angular/http';

import {NgReduxModule, NgRedux} from 'ng2-redux';
import {store, IAppState} from './store';

import {AppComponent} from './app.component';
import {WeatherCardComponent} from './weather-card/weather-card.component';
import {WeatherCardListComponent} from './weather-card-list/weather-card-list.component';
import {SearchComponent} from './search/search.component';
import {WeatherService} from './weather-card/weather.service';
import {UnitSwitcherComponent} from './unit/unit-switcher.component';
import {WeatherIconComponent} from './weather-icon/weather-icon.component';
import {CurrentWeatherComponent} from './current-weather/current-weather.component';
import {UnitActions} from './unit/unit.actions';


@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    WeatherCardListComponent,
    SearchComponent,
    UnitSwitcherComponent,
    WeatherIconComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    NgReduxModule
  ],
  providers: [
    UnitActions,
    WeatherService,
    {provide: 'WEATHER_API_URL', useValue: 'https://api.forecast.io/forecast/4891dee8e0ca9cf8fdb7ad6dd07fef9f'},
    {provide: 'GEOCODE_API_URL', useValue: 'https://maps.googleapis.com/maps/api/geocode/json'},
    {provide: 'IP_API_URL', useValue: 'http://ip-api.com/json'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
