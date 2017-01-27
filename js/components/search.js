const React = require('react');
const ReactDOM = require('react-dom');
const store = require('../store')
const actions = require('../actions/index');
const connect = require('react-redux').connect;

const Input = require('./input');
const Checkbox = require('./checkbox');
const Button = require('./button');
const AddCard = require('./add_card');

class Search extends React.Component {

	constructor(props){
		super(props);
		// page * pageSize, (page * pageSize) + pageSize
	}

	submitHandler(e) {
		e.preventDefault();
		console.log(store.getState());
		store.dispatch(actions.cardSearch(store.getState().filters));
		store.dispatch(actions.filterReset());
		e.target.reset();
	}

	pageForward() {
		if(this.props.page * pageSize <= this.props.searchResults.length) {
			store.dispatch(actions.pageForward());
		}
	}

	pageBack() {
		if(this.props.page != 0) {
			store.dispatch(actions.pageBack());
		}
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
		else {
			store.dispatch(actions.colorFilter(e.target.value));
		}
		console.log(store.getState().filters)
	}

	render() {
		let pageSize = 10;
		let pageContent = this.props.searchResults.slice(page * pageSize, (page * pageSize) + pageSize)

		let searchResults = pageContent.map( (key) => {
			console.log(key);
			return (
				<li>
					<img src={key.imageUrl}></img>
					<AddCard card={key} />
				</li>
			)
		})
		return (
			<div id="searchDiv">
				<h2>Card Search</h2>
				<form onSubmit={this.submitHandler}>
					<Input className="cardSearch" id="cardNameInput" type="search" placeholder="Card Name" onChange={this.nameFilter} />
					<Input className="cardSearch" id="manaCostInput" type="search" placeholder="Mana Cost" onChange={this.cmcFilter} />
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
					<label htmlFor="blackSelect" id="colorLabel">Colors</label>
					<fieldset className="colorSelector">
						<Checkbox className="colorOption" id="blackSelect" value="black" image="css/black_mana_button.png" onClick={this.colorFilter} />
						<Checkbox className="colorOption" id="blueSelect" value="blue" image="css/blue.png" onClick={this.colorFilter} />
						<Checkbox className="colorOption" id="greenSelect" value="green" image="css/green.png" onClick={this.colorFilter} />
						<Checkbox className="colorOption" id="redSelect" value="red" image="css/red.png" onClick={this.colorFilter} />
						<Checkbox className="colorOption" id="whiteSelect" value="white" image="css/white.png" onClick={this.colorFilter} />
					</fieldset>
					<Button className="submitButton" type="submit" text="Submit" />
					<i class="fa fa-arrow-circle-o-left fa-4x pageButton" id="pageBack" aria-hidden="true" onClick={this.pageBack}></i>
					<i class="fa fa-arrow-circle-o-right fa-4x pageButton" id="pageForward" aria-hidden="true" onClick={this.pageForward}></i>
				</form>
				<ul>
					{searchResults}
				</ul>
			</div>
		);
	}
}

let mapStateToProps = (state, props) => {
	return ({
		searchResults: state.cardSearchResults,
		page: state.page
	})
}

let Container = connect(mapStateToProps)(Search);

module.exports = Container;
