import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {LocationActions} from './location.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @HostBinding('attr.class') cssClass = 'search';

  @Output() onQueryEntered: EventEmitter<string>;

  constructor(private locationActions: LocationActions) {
    this.onQueryEntered = new EventEmitter();
  }

  onFormSubmitted(city: HTMLInputElement) {
    this.locationActions.getLocationByAddress(city.value);
    this.onQueryEntered.emit(city.value);
    return false;
  }
}
