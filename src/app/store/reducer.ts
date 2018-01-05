import {Unit} from '../models/unit';
import {IAppState} from './IAppState';
import {SELECT_UNIT} from './actions';

const initialState: IAppState = {
  units: [
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
  ]
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_UNIT:
      return selectUnit(state, action);
    default:
      return state;
  }
}

function selectUnit(state, {unit}: {unit: Unit}): IAppState {
  const units = state.units.map(allUnitsDeselected);

  const newlySelectedUnit = units.find(byUnit(unit));
  newlySelectedUnit.selected = true;

  return Object.assign({}, state, {
    units
  });
}

function allUnitsDeselected(unit: Unit) {
  return Object.assign({}, unit, {selected: false});
}

function byUnit(unit: Unit) {
  return function (_unit: Unit) {
      return _unit.display === unit.display;
  };
}


