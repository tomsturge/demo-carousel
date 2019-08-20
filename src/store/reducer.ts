import { AppState, AppActions } from './types';
import { Reducer } from 'redux';

export const initialState = {
  selected: 0,
  count: 0
};

interface CheckSelectionArgs {
  count?: number;
  positive?: boolean;
  selected: number;
}

const checkSelection = ({
  count = 0,
  positive = true,
  selected
}: CheckSelectionArgs): number => {
  if (selected === 0 && !positive) {
    return count;
  }

  if (selected === count && positive) {
    return 0;
  }

  return positive ? selected + 1 : selected - 1;
};

const reducer: Reducer<AppState, AppActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'UPDATE_COUNT':
      return {
        ...state,
        count: action.payload
      };
    case 'INCREMENT_SELECTION':
      return {
        ...state,
        selected: checkSelection({
          count: state.count,
          selected: state.selected
        })
      };
    case 'DECREMENT_SELECTION':
      return {
        ...state,
        selected: checkSelection({
          count: state.count,
          selected: state.selected,
          positive: false
        })
      };
    case 'UPDATE_SELECTION':
      return {
        ...state,
        selected: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
