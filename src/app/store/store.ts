import {combineReducers, compose, createStore, GenericStoreEnhancer} from 'redux';
import {IAppState} from './IAppState';
import {unitReducer as units} from '../unit/unit.reducer';

declare const window: any;

const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
  ? window.devToolsExtension()
  : (f) => f;

const rootReducer = combineReducers<IAppState>({
  units
});

export const store = createStore<IAppState>(
  rootReducer,
  compose(devToolsExtension) as GenericStoreEnhancer
);

