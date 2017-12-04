import { filterTypes } from './../../js/actions/actionTypes';
import { filterReducer } from './../../js/reducers/filters';


describe('filter reducer', () => {
  it('should handle FILTER_RESET', () => {
    const sampleAction = {
      type: filterTypes.FILTER_RESET
    }
    expect(filterReducer({}, sampleAction)).toEqual({
      filters: {}
    })
  })
  it('should handle NAME_FILTER', () => {
    const sampleAction = {
      type: filterTypes.NAME_FILTER,
      name: 'testName'
    }
    const sampleState = {
      filters: {}
    }
    expect(filterReducer(sampleState, sampleAction)).toEqual(
      {
        filters:
        {
          name: 'testName'
        }
      }
    )
  })
  it('should handle CMC_FILTER', () => {
    const sampleAction = {
      type: filterTypes.CMC_FILTER,
      cmc: 4
    }
    const sampleState = {
      filters: {}
    }
    expect(filterReducer(sampleState, sampleAction)).toEqual(
      {
        filters:
        {
          cmc: 4
        }
      }
    )
  })
  it('should handle TYPE_FILTER', () => {
    const sampleAction = {
      type: filterTypes.TYPE_FILTER,
      typeOption: 'testType'
    }
    const sampleState = {
      filters: {}
    }
    expect(filterReducer(sampleState, sampleAction)).toEqual(
      {
        filters:{
          type: 'testType'
        }

      }
    )
  })
  it('should handle RARITY_FILTER', () => {
    const sampleAction = {
      type: filterTypes.RARITY_FILTER,
      rarity: 'testRarity'
    }
    const sampleState = {
      filters: {}
    }
    expect(filterReducer(sampleState, sampleAction)).toEqual(
      {
        filters:{
          rarity: 'testRarity'
        }
      }
    )
  })
  it('should handle COLOR_FILTER', () => {
    const sampleAction = {
      type: filterTypes.COLOR_FILTER,
      color: 'testColor'
    }
    const sampleState = {
      filters: {
        colors: []
      }
    }
    expect(filterReducer(sampleState, sampleAction)).toEqual(
      {
        filters:{
          colors: ['testColor']
        }
      }
    )
  })
  it('should handle REMOVE_COLOR_FILTER', () => {
    const sampleAction = {
      type: filterTypes.REMOVE_COLOR_FILTER,
      color: 'testColor'
    }
    const sampleState = {
      filters: { colors: ['testColor']}
    }
  })
})