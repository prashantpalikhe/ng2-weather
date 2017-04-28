import {Component} from '@angular/core';
import {Weather} from './weather-card/weather.model';
import {WeatherService} from './weather-card/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData: Weather[];

  selectedCity: string;

  selectedUnit: string;

  constructor(private weatherService: WeatherService) {

  }

  fetchWeatherData(city) {
    this.weatherService.getWeatherData(city).subscribe((data: Weather[]) => {
      this.weatherData = data;
    });
  }
}
