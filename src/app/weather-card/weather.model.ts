import {Current} from './current.model';
import {Daily} from './daily.model';
import {Coords} from '../coords.model';

export class Weather {
  public constructor(public coords: Coords,
                     public current: Current,
                     public forecast: Daily[]) {
  }
}
