import {Component, EventEmitter, HostBinding, Output} from '@angular/core';
import { IAppState} from '../store';
import {Unit} from './unit';
import {NgRedux, select} from 'ng2-redux';
import {Observable} from 'rxjs/Observable';
import {UnitActions} from './unit.actions';

@Component({
  selector: 'app-unit-switcher',
  templateUrl: './unit-switcher.component.html',
  styleUrls: ['./unit-switcher.component.css']
})
export class UnitSwitcherComponent {
  @HostBinding('attr.class') cssClass = 'unit';
  @Output() onUnitChanged: EventEmitter<Unit>;

  @select('units') units$: Observable<Unit>;

  constructor(private ngRedux: NgRedux<IAppState>, private unitActions: UnitActions) {
    this.onUnitChanged = new EventEmitter();
  }

  selectUnit(unit: Unit): void {
    this.unitActions.selectUnit(unit);
    this.onUnitChanged.emit(unit);
  }
}
