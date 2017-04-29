import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'search';

  @Output() onQueryEntered: EventEmitter<string>;

  constructor() {
    this.onQueryEntered = new EventEmitter();
  }

  ngOnInit() {
  }

  onFormSubmitted(city: HTMLInputElement) {
    this.onQueryEntered.emit(city.value);
    return false;
  }
}
