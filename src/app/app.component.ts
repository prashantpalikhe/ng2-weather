import {Component} from '@angular/core';
import {WeatherService} from './weather-card/weather.service';
import {Unit} from './unit-switcher/unit.model';
import {Weather} from './weather-card/weather.model';
import {Location} from "./location.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weather: Weather;

  private unit: Unit;
  private location: Location;

  private units: Unit[] = [
    new Unit('C', 'uk', true),
    new Unit('F', 'us', false)
  ];

  constructor(private weatherService: WeatherService) {
    this.unit = this.units[0];

    this.weatherService.getCurrentLocation().subscribe((location: Location) => {
      this.location = location;
      this.getWeather();
    });
  }

  onUnitChanged(unit: Unit) {
    this.unit = unit;

    this.getWeather();
  }

  onAddressEntered(address) {
    this.weatherService.getLocationForAddress(address)
      .subscribe((location: Location) => {
        this.location = location;

        this.getWeather();
      });
  }

  getWeather() {
    if (this.location) {
      this.weatherService.getWeather(this.location, this.unit).subscribe((data: Weather) => {
        this.weather = data;
      });
    }
  }
}
