import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../../store';
import { cardSearch, pageForward, pageBack} from '../../actions/card';
import { filterReset, nameFilter, typeFilter, cmcFilter, rarityFilter, colorFilter, removeColorFilter } from '../../actions/filters';
import { connect } from 'react-redux';

import Input from './../stateless/Input';
import Checkbox from './../stateless/Checkbox';
import Button from './../stateless/Button';
import SelectMenu from './../stateless/SelectMenu';
import AddCardContainer from './AddCardContainer';

class SearchContainer extends React.Component {

	constructor(props){
		super(props);
		this.pageForward
	}

	submitHandler(e) {
		e.preventDefault();
		console.log(store.getState());
		store.dispatch(cardSearch(store.getState().filters));
		store.dispatch(filterReset());
		e.target.reset();
	}

	pageForward() {
		if(store.getState().page * store.getState().pageSize <= store.getState().cardSearchResults.length) {
			store.dispatch(pageForward());
		}
	}

	pageBack() {
		if(store.getState().page != 0) {
			store.dispatch(pageBack());
		}
	}

	nameFilter(e) {
		store.dispatch(nameFilter(e.target.value));
	}

	cmcFilter(e) {
		store.dispatch(cmcFilter(e.target.value));
	}

	typeFilter(e) {
		store.dispatch(typeFilter(e.target.value));
	}

	rarityFilter(e) {
		store.dispatch(rarityFilter(e.target.value));
	}

	colorFilter(e) {
		if (!e.target.checked) {
			store.dispatch(removeColorFilter(e.target.value))
		}
		else {
			store.dispatch(colorFilter(e.target.value));
		}
		console.log(store.getState().filters)
	}

	render() {
		// let pageContent = this.props.searchResults.slice(this.props.page * this.props.pageSize, (this.props.page * this.props.pageSize) + this.props.pageSize)

		// let searchResults = pageContent.map( (key) => {
		// 	console.log(key);
		// 	return (
		// 		<li>
		// 			<img src={key.imageUrl}></img>
		// 			<AddCardContainer card={key} />
		// 		</li>
		// 	)
		// })
		return (
			<div id="searchDiv">
				<h2>Card Search</h2>
				<form onSubmit={this.submitHandler}>
					<Input className="cardSearch" id="cardNameInput" type="search" placeholder="Card Name" onChange={this.nameFilter} />
					<Input className="cardSearch" id="manaCostInput" type="search" placeholder="Mana Cost" onChange={this.cmcFilter} />
					<SelectMenu className="typeSelector" name="Card Type" onChange={this.typeFilter} options={[1,2,3]} />
					<SelectMenu className="raritySelector" name="Rarity" onChange={this.rarityFilter} options={[4,5,6]} />
					<label htmlFor="blackSelect" id="colorLabel">Colors</label>
					<fieldset className="colorSelector">
						<Checkbox className="colorOption" id="blackSelect" value="black" image="css/black_mana_button.png" onClick={this.colorFilter} />
						<Checkbox className="colorOption" id="blueSelect" value="blue" image="css/blue.png" onClick={this.colorFilter} />
						<Checkbox className="colorOption" id="greenSelect" value="green" image="css/green.png" onClick={this.colorFilter} />
						<Checkbox className="colorOption" id="redSelect" value="red" image="css/red.png" onClick={this.colorFilter} />
						<Checkbox className="colorOption" id="whiteSelect" value="white" image="css/white.png" onClick={this.colorFilter} />
					</fieldset>
					<Button className="submitButton" type="submit" text="Submit" />
				</form>
				<ul>

				</ul>
				<i className="fa fa-arrow-circle-o-left fa-4x pageButton" id="pageBack" aria-hidden="true" onClick={this.pageBack}></i>
				<i className="fa fa-arrow-circle-o-right fa-4x pageButton" id="pageForward" aria-hidden="true" onClick={this.pageForward}></i>
			</div>
		);
	}
}

let mapStateToProps = (state, props) => {
	return {
		searchResults: state.cardSearchResults,
		page: state.page,
		pageSize: state.pageSize
	}
}

let Container = connect(mapStateToProps)(SearchContainer);

export default Container;
