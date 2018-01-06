import {Injectable} from '@angular/core';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store/IAppState';
import {WeatherService} from './weather.service';
export const GET_WEATHER_SUCCESS = 'weather/success';

@Injectable()
export class WeatherActions {
  constructor(private ngRedux: NgRedux<IAppState>, private weatherService: WeatherService) {}

  getWeather() {
    const {location, units} = this.ngRedux.getState();

    if (!location) {
      return false;
    }

    const selectedUnit = units.find(unit => unit.selected);

    this.weatherService.getWeather(location, selectedUnit).subscribe((weather) => {
        this.ngRedux.dispatch({
          type: GET_WEATHER_SUCCESS,
          weather
        });
    });
  }
}
