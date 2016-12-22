const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store')
const actions = require('../actions/index');

const Input = require('./input');
const Checkbox = require('./checkbox');
const Button = require('./button');

class Search extends React.Component {

	submitHandler(e) {
		e.preventDefault();
		store.dispatch(actions.colorsToString());
		store.dispatch(actions.cardSearch(store.getState().filters));
	}

	nameFilter(e) {
		store.dispatch(actions.nameFilter(e.target.value));
	}

	cmcFilter(e) {
		store.dispatch(actions.cmcFilter(e.target.value));
	}

	typeFilter(e) {
		store.dispatch(actions.typeFilter(e.target.value));
	}

	rarityFilter(e) {
		store.dispatch(actions.rarityFilter(e.target.value));
	}

	colorFilter(e) {
		if (!e.target.checked) {
			store.dispatch(actions.removeColorFilter(e.target.value))
		}
		store.dispatch(actions.colorFilter(e.target.value));
	}

	render() {
		return (
			<div>
				<h2>Card Search</h2>
				<form onSubmit={this.submitHandler}>
					<Input className="cardSearch" id="cardNameInput" placeholder="Card Name" onChange={this.nameFilter} />
					<Input className="cardSearch" id="manaCostInput" placeholder="Mana Cost" onChange={this.cmcFilter} />
					<select id="typeSelector" onChange={this.typeFilter}>
						<option>Card Type</option>
						<option value="artifact">Artifact</option>
						<option value="creature">Creatue</option>
						<option value="enchantment">Enchantment</option>
						<option value="instant">Instant</option>
						<option value="land">Land</option>
						<option value="planeswalker">Planeswalker</option>
						<option value="sorcery">Sorcery</option>
					</select>
					<select id="raritySelector" onChange={this.rarityFilter}>
						<option>Rarity</option>
						<option value="basic land">Basic Land</option>
						<option value="common">Common</option>
						<option value="uncommon">Uncommon</option>
						<option value="rare">Rare</option>
						<option value="mythic rare">Mythic Rare</option>
					</select>
					<label>Colors</label>
					<fieldset className="colorSelector">
						<Checkbox className="colorOption" id="blackSelect" value="black" onClick={this.colorFilter} />
						<Checkbox className="colorOption" id="blueSelect" value="blue" onClick={this.colorFilter} />
						<Checkbox className="colorOption" id="greenSelect" value="green" onClick={this.colorFilter} />
						<Checkbox className="colorOption" id="redSelect" value="red" onClick={this.colorFilter} />
						<Checkbox className="colorOption" id="whiteSelect" value="white" onClick={this.colorFilter} />
					</fieldset>
					<Button className="submitButton" type="submit" text="submit" />
				</form>
				<div id="searchResults">{store.getState().cardSearchResults}</div>
			</div>
		);
	}
}

module.exports = Search;
