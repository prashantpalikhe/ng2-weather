import {Component, ElementRef, Input, OnInit, OnDestroy} from '@angular/core';
import skycons from 'skycons';

const Icon = skycons(window);

@Component({
  selector: 'weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css']
})
export class WeatherIconComponent implements OnInit, OnDestroy {

  @Input() size: number;
  @Input() name: string;

  private icon: any;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.icon = new Icon({color: 'white'});

    this.icon.set(this.element.nativeElement.querySelector('canvas'), this.name);
    this.icon.play();
  }

  ngOnDestroy() {
    this.icon.remove(this.element);
  }
}
