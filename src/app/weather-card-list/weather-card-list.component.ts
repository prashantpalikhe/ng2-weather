import {Component, Input, OnInit} from '@angular/core';
import {Weather} from '../weather-card/weather.model';

@Component({
  selector: 'app-weather-card-list',
  templateUrl: './weather-card-list.component.html',
  styleUrls: ['./weather-card-list.component.css']
})
export class WeatherCardListComponent implements OnInit {

  @Input() weatherData: Weather[];

  constructor() {
  }

  ngOnInit() {

  }

}
