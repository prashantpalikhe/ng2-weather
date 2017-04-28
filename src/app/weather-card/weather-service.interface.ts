import {Weather} from './weather.model';

export interface IWeatherService {
  getWeatherData(address: string);
}
