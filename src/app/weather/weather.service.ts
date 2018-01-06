import {Inject, Injectable} from '@angular/core';
import {Http, Jsonp, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Unit} from '../unit/unit';
import {Weather} from './weather';
import {Location} from '../location/location';

@Injectable()
export class WeatherService {

  constructor(private http: Http,
              private jsonp: Jsonp,
              @Inject('WEATHER_API_URL') private weatherApiUrl: string,
              @Inject('GEOCODE_API_URL') private geocodeApiUrl: string,
              @Inject('IP_API_URL') private ipApiUrl: string) {
  }

  getWeather(location: Location, unit: Unit): Observable<Weather> {
    return this.jsonp.get(`${this.weatherApiUrl}/${location.latitude},${location.longitude}?units=${unit.value}&exclude=minutely,hourly,alerts,flags&callback=JSONP_CALLBACK`)
      .map((res: Response) => {
        const result = res.json();
        const weather = {} as Weather;
        const today = result.daily.data.shift();

        weather.current = result.currently;
        weather.current.period = (result.currently.time > today.sunsetTime || result.currently.time < today.sunriseTime) ? 'night' : 'day'

        weather.dailyForecast = result.daily.data;

        return weather;
      });
  }
}
