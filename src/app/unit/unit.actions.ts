import {Unit} from './unit';
import {NgRedux} from 'ng2-redux';
import {IAppState} from '../store/IAppState';
import {Injectable} from '@angular/core';
import {WeatherActions} from '../weather/weather.actions';

export const SELECT_UNIT = 'unit/SELECT';

@Injectable()
export class UnitActions {
  constructor(private ngRedux: NgRedux<IAppState>, private weatherActions: WeatherActions) {

  }

  selectUnit(unit: Unit) {
    this.ngRedux.dispatch({
      type: SELECT_UNIT,
      unit
    });

    this.weatherActions.getWeather();
  }
}
