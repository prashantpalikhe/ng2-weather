import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from 'ng2-redux';
import {IAppState} from './store/IAppState';
import {LocationActions} from './location/location.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @select() location$;
  @select() weather$;

  constructor(private ngRedux: NgRedux<IAppState>, private locationActions: LocationActions) {

  }

  ngOnInit() {
    this.locationActions.getCurrentLocation();
  }
}
