import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  AppState,
  UpdateCountAction,
  IncrementSelectionAction,
  DecrementSelectionAction,
  UpdateSelectionAction,
  ActionTypes
} from './types';

export const updateCount: ActionCreator<
  ThunkAction<void, AppState, null, UpdateCountAction>
> = (payload: number) => (dispatch: Dispatch): void => {
  dispatch({
    type: ActionTypes.UPDATE_COUNT,
    payload
  });
};

export const incrementSelection: ActionCreator<
  ThunkAction<void, AppState, null, IncrementSelectionAction>
> = () => (dispatch: Dispatch): void => {
  dispatch({
    type: ActionTypes.INCREMENT_SELECTION
  });
};

export const decrementSelection: ActionCreator<
  ThunkAction<void, AppState, null, DecrementSelectionAction>
> = () => (dispatch: Dispatch): void => {
  dispatch({
    type: ActionTypes.DECREMENT_SELECTION
  });
};

export const updateSelection: ActionCreator<
  ThunkAction<void, AppState, null, UpdateSelectionAction>
> = (payload: number) => (dispatch: Dispatch): void => {
  dispatch({
    type: ActionTypes.UPDATE_SELECTION,
    payload
  });
};
