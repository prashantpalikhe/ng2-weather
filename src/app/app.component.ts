import {Component} from '@angular/core';
import {Weather} from './weather-card/weather.model';
import {WeatherService} from './weather-card/weather.service';
import {Unit} from "./unit-switcher/unit.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData: Weather[];

  private address: string;

  private unit: Unit;

  private units: Unit[] = [
    new Unit('C', 'uk'),
    new Unit('F', 'us')
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
    this.weatherService.getWeatherData(this.address, this.unit || this.units[0]).subscribe((data: Weather[]) => {
      this.weatherData = data;
    });
  }
}
