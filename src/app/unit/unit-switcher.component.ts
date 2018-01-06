import {Component, HostBinding} from '@angular/core';
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

  @select('units') units$: Observable<Unit>;

  constructor(private ngRedux: NgRedux<IAppState>, private unitActions: UnitActions) {
  }

  selectUnit(unit: Unit): void {
    this.unitActions.selectUnit(unit);
  }
}
