import {Daily} from './daily.model';

export interface IWeatherService {
  getWeatherData(address: string);
}
