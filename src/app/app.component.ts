import {Component} from '@angular/core';
import {Weather} from './weather-card/weather.model';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData: Weather[];

  constructor(private http: Http) {

  }

  fetchWeatherData(city: HTMLInputElement): boolean {
    console.log(this.getGeoCodeForAddress(city.value));


    return false;
  }

  getGeoCodeForAddress(address: string) {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`);
  }
}
