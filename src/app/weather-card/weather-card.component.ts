import {Component, Input} from '@angular/core';
import { Daily } from './daily.model';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @Input() weather: Daily;

  constructor() {
  }
}
