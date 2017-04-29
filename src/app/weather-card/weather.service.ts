import {Inject, Injectable} from '@angular/core';
import {Http, Jsonp, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Coords} from '../coords.model';
import {Daily} from './daily.model';
import {Current} from './current.model';
import {Unit} from "../unit-switcher/unit.model";
import {Weather} from "./weather.model";

@Injectable()
export class WeatherService {

  constructor(private http: Http,
              private jsonp: Jsonp, @Inject('WEATHER_API_URL')
              private weatherApiUrl: string,
              @Inject('GEOCODE_API_URL') private geocodeApiUrl: string) {
  }

  getWeatherData(address: string, unit: Unit): Observable<Weather> {
    return this.getCoordsForAddress(address)
      .flatMap((coords: Coords) => {
        return this.jsonp.get(`${this.weatherApiUrl}/${coords.latitude},${coords.longitude}?units=${unit.value}&exclude=minutely,hourly,alerts,flags&callback=JSONP_CALLBACK`)
          .map((res: Response) => {
            const result = res.json();

            console.log(result);

            const forecast = result.daily.data.map(({temperatureMax, temperatureMin, time, icon, sunriseTime, sunsetTime}) => {
              return new Daily(
                temperatureMax,
                temperatureMin,
                time,
                icon,
                sunriseTime,
                sunsetTime
              );
            });

            const today = forecast[0];

            const current = new Current(
              result.currently.temperature,
              result.currently.apparentTemperature,
              result.currently.summary,
              result.currently.icon,
              result.currently.precipIntensity,
              result.currently.precipProbability,
              result.currently.dewPoint,
              result.currently.humidity,
              result.currently.windSpeed,
              result.currently.windBearing,
              result.currently.cloudCover,
              result.currently.pressure,
              (result.currently.time > today.sunsetTime || result.currently.time < today.sunriseTime) ? 'night' : 'day'
            );

            return new Weather(
              coords,
              current,
              forecast
            );
          });
      });
  }

  getCoordsForAddress(address: string): Observable<Coords> {
    return this.http.get(`${this.geocodeApiUrl}?address=${address}`)
      .map((response: Response) => {
        const result = response.json().results[0];
        const {lat, lng} = result.geometry.location;

        return new Coords(lat, lng);
      });
  }
}
