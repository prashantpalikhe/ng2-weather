import {Current} from './current.model';
import {Daily} from './daily.model';
import {Location} from '../location.model';

export class Weather {
  public constructor(public location: Location,
                     public current: Current,
                     public forecast: Daily[]) {
  }
}
