import {Component, HostBinding, Input} from '@angular/core';
import {DailyWeather} from '../../weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @HostBinding('attr.class') cssClass = 'weather-card';

  @Input() weather: DailyWeather;

  constructor() {
  }
}
