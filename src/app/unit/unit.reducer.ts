import {Unit} from './unit';
import {SELECT_UNIT} from './unit.actions';

const appUnits: Unit[] = [
  {
    display: 'C',
    value: 'uk',
    selected: true,
  },
  {
    display: 'F',
    value: 'us',
    selected: false,
  },
];

export function unitReducer(state: Unit[] = appUnits, action) {
  switch (action.type) {
    case SELECT_UNIT:
      return selectUnit(state, action);
    default:
      return state;
  }
}

function selectUnit(state: Unit[], {unit}: {unit: Unit}): Unit[] {
  const units = state.map(allUnitsDeselected);

  const newlySelectedUnit = units.find(byUnit(unit));
  newlySelectedUnit.selected = true;

  return units;
}

function allUnitsDeselected(unit: Unit) {
  return Object.assign({}, unit, {selected: false});
}

function byUnit(unit: Unit) {
  return function (_unit: Unit) {
    return _unit.display === unit.display;
  };
}



