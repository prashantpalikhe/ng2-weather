import {Component} from '@angular/core';
import {WeatherService} from './weather-card/weather.service';
import {Unit} from "./unit-switcher/unit.model";
import {Weather} from "./weather-card/weather.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weather: Weather;

  private address: string;

  private unit: Unit;

  private units: Unit[] = [
    new Unit('C', 'uk', true),
    new Unit('F', 'us', false)
  ];

  constructor(private weatherService: WeatherService) {

  }

  setUnit(unit: Unit) {
    this.unit = unit;

    this.fetchWeatherData();
  }

  setAddress(address: string) {
    this.address = address;

    this.fetchWeatherData();
  }

  fetchWeatherData() {
    this.weatherService.getWeatherByAddress(this.address, this.unit || this.units[0]).subscribe((data: Weather) => {
      this.weather = data;
    });
  }
}
