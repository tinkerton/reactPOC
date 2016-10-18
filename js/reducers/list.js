
import type { Action } from '../actions/types';
import { SET_INDEX, ADD_CITY } from '../actions/list';

export type State = {
  cityList: Array,
  selectedIndex: number,
}

const initialState = {
  cityList: [
    { name: 'Götlaborg', id: 2689287 },
  ],
  selectedIndex: 0,
};

export default function (state: State = initialState, action: Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload,
    };
  }
  if (action.type === ADD_CITY) {
    console.log(action.payload);
    return {
      ...state,
      cityList: action.payload.concat(state.cityList),
    };
  }
  // if (action.type === UPDATE_LIST_ITEM) {
  //   return {
  //     ...state,
  //     list: state.list
  //     .slice(0, state.selectedIndex)
  //     .concat(action.payload)
  //     .concat(state.list.slice(state.selectedIndex + 1, state.list.length)),
  //   };
  // }


  return state;
}
