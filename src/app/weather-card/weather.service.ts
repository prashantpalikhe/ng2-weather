import {Inject, Injectable} from '@angular/core';
import {Http, Jsonp, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Location} from '../location.model';
import {Daily} from './daily.model';
import {Current} from './current.model';
import {Unit} from '../unit-switcher/unit.model';
import {Weather} from './weather.model';

@Injectable()
export class WeatherService {

  constructor(private http: Http,
              private jsonp: Jsonp, @Inject('WEATHER_API_URL')
              private weatherApiUrl: string,
              @Inject('GEOCODE_API_URL') private geocodeApiUrl: string) {
  }

  getWeatherByAddress(address: string, unit: Unit): Observable<Weather> {
    return this.getLocationForAddress(address)
      .flatMap((location: Location) => {
        return this.getWeatherByLocation(location, unit);
      });
  }

  getLocationForAddress(address: string): Observable<Location> {
    return this.http.get(`${this.geocodeApiUrl}?address=${address}`)
      .map((response: Response) => {
        const result = response.json().results[0];

        console.log(result);

        const name = result.formatted_address;
        const {lat, lng} = result.geometry.location;
        return new Location(name, lat, lng);
      });
  }

  getWeatherByLocation(location: Location, unit: Unit): Observable<Weather> {
    return this.jsonp.get(`${this.weatherApiUrl}/${location.latitude},${location.longitude}?units=${unit.value}&exclude=minutely,hourly,alerts,flags&callback=JSONP_CALLBACK`)
      .map((res: Response) => {
        const result = res.json();

        console.log(result);

        const today = result.daily.data.shift();

        const forecast = result.daily.data.map(({temperatureMax, temperatureMin, time, icon}) => {
          return new Daily(
            temperatureMax,
            temperatureMin,
            time,
            icon
          );
        });

        const current = new Current(
          result.currently.temperature,
          result.currently.apparentTemperature,
          result.currently.summary,
          result.currently.icon,
          result.currently.precipProbability,
          result.currently.humidity,
          result.currently.windSpeed,
          result.currently.windBearing,
          result.currently.cloudCover,
          result.currently.pressure,
          (result.currently.time > today.sunsetTime || result.currently.time < today.sunriseTime) ? 'night' : 'day'
        );

        return new Weather(
          location,
          current,
          forecast
        );
      });
  }
}
