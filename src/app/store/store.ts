import {compose, createStore, GenericStoreEnhancer} from 'redux';
import {reducer} from './reducer';
import {IAppState} from './IAppState';

declare const window: any;

const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
  ? window.devToolsExtension()
  : (f) => f;

export const store = createStore<IAppState>(
  reducer,
  compose(devToolsExtension) as GenericStoreEnhancer
);

