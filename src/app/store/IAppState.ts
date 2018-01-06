import { Unit } from '../unit/unit';
import {Weather} from '../weather/weather';
import {Location} from '../location/location';

export interface IAppState {
  units: Unit[];
  location: Location | null;
  weather: Weather | null;
}
