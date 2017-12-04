import { filterTypes } from './actionTypes';

//Reset filters in state
export function filterReset () {
	return {
		type: filterTypes.FILTER_RESET
	}
}

//Add filters to state
export function nameFilter (name) {
	return {
		type: filterTypes.NAME_FILTER,
		name
	}
}

export function cmcFilter (cmc) {
	return {
		type: filterTypes.CMC_FILTER,
		cmc
	}
}

export function typeFilter (typeOption) {
	return {
		type: filterTypes.TYPE_FILTER,
		typeOption
	}
}

export function rarityFilter (rarity) {
	return {
		type: filterTypes.RARITY_FILTER,
		rarity
	}
}

export function colorFilter (color) {
	return {
		type: filterTypes.COLOR_FILTER,
		color
	}
}

export function removeColorFilter (color) {
	return {
		type: filterTypes.REMOVE_COLOR_FILTER,
		color
	}
}

export function colorsToString () {
	return {
		type: filterTypes.COLORS_TO_STRING
	}
}