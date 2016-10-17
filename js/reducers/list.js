
import type { Action } from '../actions/types';
import { SET_INDEX, SET_LIST, UPDATE_LIST_ITEM} from '../actions/list';

export type State = {
    list: object,
}

const initialState = {
  list: [
    {name:'jsonItem1', id:'5550001'},
    {name:'jsonItem2', id:'5550002'},
    {name:'jsonItem3', id:'5550003'},
    {name:'jsonItem4', id:'5550004'},
    {name:'jsonItem5', id:'5550005'},
    {name:'jsonItem6', id:'5550006'},
    {name:'jsonItem7', id:'5550007'}
  ],
  selectedIndex: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload,
    };
  }
  if (action.type === SET_LIST) {
    return {
      ...state,
      list: action.payload.concat(state.list),
    };
  }
  if (action.type === UPDATE_LIST_ITEM) {
      return {
      ...state,
      list: state.list.slice(0, state.selectedIndex).concat(action.payload).concat(state.list.slice(state.selectedIndex+1, state.list.length)),
    };
  }


  return state;




}
