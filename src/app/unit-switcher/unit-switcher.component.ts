import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Unit} from "./unit.model";

@Component({
  selector: 'unit-switcher',
  templateUrl: './unit-switcher.component.html',
  styleUrls: ['./unit-switcher.component.css']
})
export class UnitSwitcherComponent {

  @Input() units: Unit[];

  @Output() onUnitChanged: EventEmitter<Unit>;

  private currentUnit: Unit;

  constructor() {
    this.onUnitChanged = new EventEmitter();
  }

  selectUnit(unit: Unit): void {
    this.currentUnit = unit;
    this.onUnitChanged.emit(unit);
  }

  isSelected(unit: Unit): boolean {
    if (!unit || !this.currentUnit) {
      return false;
    }

    return unit.value === this.currentUnit.value;
  }

}
