import {Component} from '@angular/core';
import {WeatherService} from './weather-card/weather.service';
import {Weather} from './weather-card/weather.model';
import {Location} from './location/location';
import {store} from './store';
import {NgRedux, select} from 'ng2-redux';
import {IAppState} from './store/IAppState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weather: Weather;

  @select() location$;

  private location: Location;

  constructor(private ngRedux: NgRedux<IAppState>, private weatherService: WeatherService) {
    this.weatherService.getCurrentLocation().subscribe((location: Location) => {
      this.location = location;
      this.getWeather();
    });
  }

  onUnitChanged() {
    this.getWeather();
  }

  onAddressEntered(address) {
    this.weatherService.getLocationForAddress(address)
      .subscribe((location: Location) => {
        this.location = location;

        this.getWeather();
      });
  }

  getSelectedUnit() {
    return store.getState().units.find(unit => unit.selected);
  }

  getWeather() {
    if (this.location) {
      this.weatherService.getWeather(this.location, this.getSelectedUnit()).subscribe((data: Weather) => {
        this.weather = data;
      });
    }
  }
}
