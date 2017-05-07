import {Component, ElementRef, Input, OnInit, OnDestroy, HostBinding, OnChanges, SimpleChanges} from '@angular/core';
import skycons from 'skycons';

const Icon = skycons(window);

@Component({
  selector: 'weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css']
})
export class WeatherIconComponent implements OnInit, OnChanges, OnDestroy {

  @HostBinding('attr.class') cssClass = 'weather-icon';

  @Input() size: number;
  @Input() name: string;

  private icon: any;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.setIcon(this.name);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.name) {
      this.setIcon(changes.name.currentValue);
    }
  }

  ngOnDestroy() {
    this.icon.remove(this.element);
  }

  setIcon(name: string) {
    this.icon = new Icon({color: 'white'});

    this.icon.set(this.element.nativeElement.querySelector('canvas'), name);
    this.icon.play();
  }
}
