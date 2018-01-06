import {combineReducers, compose, createStore, GenericStoreEnhancer} from 'redux';
import {IAppState} from './IAppState';
import {unitReducer as units} from '../unit/unit.reducer';
import {locationReducer as location} from '../location/location.reducer';
import {weather} from '../weather/weather.reducer';

declare const window: any;

const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
  ? window.devToolsExtension()
  : (f) => f;

const rootReducer = combineReducers<IAppState>({
  units,
  location,
  weather
});

export const store = createStore<IAppState>(
  rootReducer,
  compose(devToolsExtension) as GenericStoreEnhancer
);

