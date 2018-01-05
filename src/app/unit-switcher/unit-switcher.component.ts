import {Component, EventEmitter, HostBinding, Output} from '@angular/core';
import {store, IAppState} from '../store';
import {selectUnit} from '../store';
import {Unit} from '../models/unit';
import {NgRedux, select} from 'ng2-redux';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-unit-switcher',
  templateUrl: './unit-switcher.component.html',
  styleUrls: ['./unit-switcher.component.css']
})
export class UnitSwitcherComponent {
  @HostBinding('attr.class') cssClass = 'unit-switcher';
  @Output() onUnitChanged: EventEmitter<Unit>;

  @select('units') units$: Observable<Unit>;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.onUnitChanged = new EventEmitter();
  }

  selectUnit(unit: Unit): void {
    store.dispatch(selectUnit(unit));
    this.onUnitChanged.emit(unit);
  }
}
