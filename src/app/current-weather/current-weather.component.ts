import {Component, Input, OnInit} from '@angular/core';
import {Current} from "../weather-card/current.model";

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() weather: Current;

  constructor() { }

  ngOnInit() {
  }

}
