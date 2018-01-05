import {Unit} from '../models/unit';
export const SELECT_UNIT = 'unit/SELECT';

export function selectUnit(unit: Unit) {
  return {
    type: SELECT_UNIT,
    unit
  };
}
