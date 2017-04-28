import {Daily} from '../weather-card/daily.model';
import {Component, HostBinding, Input, OnInit} from "@angular/core";

@Component({
  selector: 'weather-card-list',
  templateUrl: './weather-card-list.component.html',
  styleUrls: ['./weather-card-list.component.css']
})
export class WeatherCardListComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'weather-card-list';

  @Input() weatherData: Daily[];

  constructor() {
  }

  ngOnInit() {

  }

}
