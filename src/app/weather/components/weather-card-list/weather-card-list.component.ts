import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {DailyWeather} from '../../weather';

@Component({
  selector: 'app-weather-card-list',
  templateUrl: './weather-card-list.component.html',
  styleUrls: ['./weather-card-list.component.css']
})
export class WeatherCardListComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'weather-card-list';

  @Input() weatherData: DailyWeather[];

  constructor() {
  }

  ngOnInit() {

  }

}
