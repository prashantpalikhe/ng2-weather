import { Unit } from '../unit/unit';

export interface IAppState {
  units: Unit[];
  location: Location | null;
}
