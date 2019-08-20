export interface AppState {
  selected: number;
  count: number;
}

export enum ActionTypes {
  INCREMENT_SELECTION = 'INCREMENT_SELECTION',
  DECREMENT_SELECTION = 'DECREMENT_SELECTION',
  UPDATE_SELECTION = 'UPDATE_SELECTION',
  UPDATE_COUNT = 'UPDATE_COUNT'
}

export interface UpdateCountAction {
  type: ActionTypes.UPDATE_COUNT;
  payload: number;
}

export interface IncrementSelectionAction {
  type: ActionTypes.INCREMENT_SELECTION;
}

export interface DecrementSelectionAction {
  type: ActionTypes.DECREMENT_SELECTION;
}

export interface UpdateSelectionAction {
  type: ActionTypes.UPDATE_SELECTION;
  payload: number;
}

export type AppActions =
  | UpdateCountAction
  | IncrementSelectionAction
  | DecrementSelectionAction
  | UpdateSelectionAction;
