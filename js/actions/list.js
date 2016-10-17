
import type { Action } from './types';

export const SET_INDEX = 'SET_INDEX';
export const SET_LIST = 'SET_LIST';
export const UPDATE_LIST_ITEM ='UPDATE_LIST_ITEM';


export function setIndex(index:number):Action {
  return {
    type: SET_INDEX,
    payload: index,
  };
}

export function setList(list: object):Action {
  return {
    type: SET_LIST,
    payload:list,
  };
}
export function updateListItem(item: object):Action {
  return {
    type: UPDATE_LIST_ITEM,
    payload:item,
  };
}
