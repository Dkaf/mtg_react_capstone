import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../store';
import actions from '../actions/index';
import { connect } from 'react-redux';

import Input from './stateless/Input';
import Checkbox from './stateless/Checkbox';
import Button from './stateless/Button';
import AddCardContainer from './containters/AddCardContainer';

class Search extends React.Component {

	constructor(props){
		super(props);
		this.pageForward
	}

	submitHandler(e) {
		e.preventDefault();
		console.log(store.getState());
		store.dispatch(actions.cardSearch(store.getState().filters));
		store.dispatch(actions.filterReset());
		e.target.reset();
	}

	pageForward() {
		if(store.getState().page * store.getState().pageSize <= store.getState().cardSearchResults.length) {
			store.dispatch(actions.pageForward());
		}
	}

	pageBack() {
		if(store.getState().page != 0) {
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
		let pageContent = this.props.searchResults.slice(this.props.page * this.props.pageSize, (this.props.page * this.props.pageSize) + this.props.pageSize)

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
					<SelectMenu className="typeSelector" name="Card Type" options={}/>
					<SelectMenu className="raritySelector" name="Rarity" options={}/>
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
					{searchResults}
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

let Container = connect(mapStateToProps)(Search);

export default Container;
