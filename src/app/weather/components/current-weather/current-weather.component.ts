import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {CurrentWeather} from '../../weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {
  @Input() weather: CurrentWeather;
  @HostBinding('attr.class') cssClass = 'current-weather';

  constructor() { }
}
