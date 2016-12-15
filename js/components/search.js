const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store')

const Input = require('./input');
const Checkbox = require('./checkbox');
const Button = require('./button');

class Search extends React.Component {

	submitHandler() {
		store.dispatch(actions.addFilters(formValues));
		store.dispatch(actions.cardSearch());
	}

	// let formValues = {
	// 	name: document.getElementById('cardNameInput').value,
	// 	cmc: document.getElementById('manaCostInput').value,
	// 	type: document.getElementById('typeSelector').value,
	// 	rarity: document.getElementById('raritySelector').value,
	// 	colors:
	// };

	render() {
		return (
			<div>
				<h2>Card Search</h2>
				<form onSubmit={this.submitHandler}>
					<Input className="cardSearch" id="cardNameInput" placeholder="Card Name" />
					<Input className="cardSearch" id="manaCostInput" placeholder="Mana Cost" />
					<select id="typeSelector">
						<option>Card Type</option>
						<option value="artifact">Artifact</option>
						<option value="creature">Creatue</option>
						<option value="enchantment">Enchantment</option>
						<option value="instant">Instant</option>
						<option value="land">Land</option>
						<option value="planeswalker">Planeswalker</option>
						<option value="sorcery">Sorcery</option>
					</select>
					<select id="raritySelector">
						<option>Rarity</option>
						<option value="basic land">Basic Land</option>
						<option value="common">Common</option>
						<option value="uncommon">Uncommon</option>
						<option value="rare">Rare</option>
						<option value="mythic rare">Mythic Rare</option>
					</select>
					<label>Colors</label>
					<fieldset className="colorSelector">
						<Checkbox className="colorOption" id="blackSelect" value="black" />
						<Checkbox className="colorOption" id="blueSelect" value="blue" />
						<Checkbox className="colorOption" id="greenSelect" value="green" />
						<Checkbox className="colorOption" id="redSelect" value="red" />
						<Checkbox className="colorOption" id="whiteSelect" value="white" />
					</fieldset>
					<Button className="submitButton" type="submit" text="submit" />
				</form>
			</div>
		);
	}
}

module.exports = Search;
