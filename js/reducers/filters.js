import { filterTypes } from './../actions/actionTypes';
import { filterArray, addToArray } from './utilityFunctions'

export function filterReducer(state = {}, action) {
  switch(action.type) {
    case filterTypes.FILTER_RESET:
      return {...state, filters: {}};
    case filterTypes.NAME_FILTER:
      return {...state, filters: { ...state.filters, name: action.name}};
    case filterTypes.CMC_FILTER:
      return {...state, filters: { ...state.filters, cmc: action.cmc}};
    case filterTypes.TYPE_FILTER:
      return {...state, filters: { ...state.filters, type: action.typeOption}};
    case filterTypes.RARITY_FILTER:
      return {...state, filters: { ...state.filters, rarity: action.rarity}};
    case filterTypes.COLOR_FILTER:
      return {...state, filters: {...state.filters, colors: addToArray(state.filters.colors, action.color)}};
    case filterTypes.REMOVE_COLOR_FILTER:
      return {...state, filters: { ...filters, colors: filterArray(state.filters.colors, action.color)}};
    default:
      return state;
  }
}