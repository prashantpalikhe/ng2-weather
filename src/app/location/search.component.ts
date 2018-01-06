import {Component, HostBinding} from '@angular/core';
import {LocationActions} from './location.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @HostBinding('attr.class') cssClass = 'search';

  constructor(private locationActions: LocationActions) {}

  onFormSubmitted(city: HTMLInputElement) {
    this.locationActions.getLocationByAddress(city.value);
    return false;
  }
}
