import {Current} from './current.model';
import {Daily} from './daily.model';

export class Weather {
  public constructor(public current: Current, public forecast: Daily[]) {}
}
