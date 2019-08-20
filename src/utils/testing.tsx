import * as React from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { render, RenderResult } from '@testing-library/react';

import reducer, { initialState } from '../store/reducer';
import { AppState, AppActions } from '../store/types';

interface Function extends RenderResult {
  store: Store<AppState, AppActions> & { dispatch: unknown };
}

export function renderWithRedux(
  ui,
  { store = createStore(reducer, initialState, applyMiddleware(thunk)) } = {}
): Function {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}
