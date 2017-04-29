import {Component, EventEmitter, HostBinding, Input, Output} from '@angular/core';
import {Unit} from './unit.model';

@Component({
  selector: 'unit-switcher',
  templateUrl: './unit-switcher.component.html',
  styleUrls: ['./unit-switcher.component.css']
})
export class UnitSwitcherComponent {

  @HostBinding('attr.class') cssClass = 'unit-switcher';

  @Input() units: Unit[];

  @Output() onUnitChanged: EventEmitter<Unit>;

  constructor() {
    this.onUnitChanged = new EventEmitter();
  }

  selectUnit(unit: Unit): void {
    this.units.forEach(_unit => _unit.selected = false);
    unit.selected = true;

    this.onUnitChanged.emit(unit);
  }
}
