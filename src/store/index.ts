import { createStore } from 'redux';

import { rootReducer } from './root/reducer';
import { InitialState, RootAction } from './root/types';

export const store = createStore<InitialState, RootAction, null, null>(rootReducer);
