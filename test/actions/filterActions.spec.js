import { filterTypes } from './../../js/actions/actionTypes';
import * as actions from './../../js/actions/filters';

describe('filter action creators', () => {
  it('should reset filters in state', () => {
    const expectedAction = {
      type: filterTypes.FILTER_RESET
    }
    expect(actions.filterReset()).toEqual(expectedAction);
  })

  it('should add name filter to state', () => {
    const name = 'testName';
    const expectedAction = {
      type: filterTypes.NAME_FILTER,
      name
    }
    expect(actions.nameFilter(name)).toEqual(expectedAction);
  })

  it('should add cmc filter to state', () => {
    const cmc = 'testCmc'
    const expectedAction = {
      type: filterTypes.CMC_FILTER,
      cmc
    }
    expect(actions.cmcFilter(cmc)).toEqual(expectedAction);
  })

  it('should add type filter to state', () => {
    const typeOption = 'testType';
    const expectedAction = {
      type: filterTypes.TYPE_FILTER,
      typeOption
    }
    expect(actions.typeFilter(typeOption)).toEqual(expectedAction);
  })

  it('should add rarity filter to state', () => {
    const rarity = 'testRarity'
    const expectedAction = {
      type: filterTypes.RARITY_FILTER,
      rarity
    }
    expect(actions.rarityFilter(rarity)).toEqual(expectedAction);
  })

  it('should add color filter to state', () => {
    const color = 'testColor'
    const expectedAction = {
      type: filterTypes.COLOR_FILTER,
      color
    }
    expect(actions.colorFilter(color)).toEqual(expectedAction);
  })

  it('should remove color filter from state', () => {
    const color = 'testColor'
    const expectedAction = {
      type: filterTypes.REMOVE_COLOR_FILTER,
      color
    }
    expect(actions.removeColorFilter(color)).toEqual(expectedAction);
  })

  it('should convert color filters to string', () => {
    const expectedAction = {
      type: filterTypes.COLORS_TO_STRING
    }
    expect(actions.colorsToString()).toEqual(expectedAction);
  })
})