import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from '../../../store';
import { cardSearch, pageForward, pageBack} from '../../../actions/card';
import { filterReset, nameFilter, typeFilter, cmcFilter, rarityFilter, colorFilter, removeColorFilter } from '../../../actions/filters';
import { connect } from 'react-redux';
import  { Button, Form, Container, Icon } from 'semantic-ui-react';

import Input from './../../stateless/Input/Input';
import Checkbox from './../../stateless/Checkbox/Checkbox';
// import Button from './../../stateless/Button/Button';
import SelectMenu from './../../stateless/SelectMenu/SelectMenu';
import AddCardContainer from './../AddCardContainer/AddCardContainer';
import styles from './styles.css'

const typeOptions = [
	'artifact',
	'creature',
	'enchantment',
	'instant',
	'land',
	'planeswalker',
	'sorcery'
];

const rarityOptions = [
	'basic land',
	'common',
	'uncommon',
	'rare',
	'mythic rare'
]

class SearchContainer extends React.Component {

	constructor(props){
		super(props);
		this.submitHandler = this.submitHandler.bind(this);
		this.pageForward = this.pageForward.bind(this);
		this.pageBack = this.pageBack.bind(this);
		this.nameFilter = this.nameFilter.bind(this);
		this.cmcFilter = this.cmcFilter.bind(this);
		this.typeFilter = this.typeFilter.bind(this);
		this.rarityFilter = this.rarityFilter.bind(this);
		this.colorFilter = this.colorFilter.bind(this);
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

	getPage() {
		let pageContent = this.props.searchResults.slice(this.props.page * this.props.pageSize, (this.props.page * this.props.pageSize) + this.props.pageSize)
		
		return pageContent.map( (key) => {
			console.log(key);
			return (
				<li>
					<img src={key.imageUrl}></img>
					<AddCardContainer card={key} />
				</li>
			)
		})
	}

	render() {

		return (
			<Container className={styles.searchDiv}>
				<h2>Card Search</h2>
				<Form size="small" onSubmit={this.submitHandler}>
					<Form.Input type="search" label="Card Name" onChange={this.nameFilter} />
					<Form.Input type="search" label="Mana Cost" onChange={this.cmcFilter} />
					<SelectMenu className={styles.typeSelector} name="Card Type" onChange={this.typeFilter} options={typeOptions} />
					<SelectMenu className={styles.raritySelector} name="Rarity" onChange={this.rarityFilter} options={rarityOptions} />
					<label htmlFor="blackSelect" className={styles.colorLabel}>Colors</label>
					<fieldset className={styles.colorSelector}>
						<Form.Checkbox className={styles.colorOption} id="blackSelect" value="black" image="css/black_mana_button.png" onClick={this.colorFilter} />
						<Form.Checkbox className={styles.colorOption} id="blueSelect" value="blue" image="css/blue.png" onClick={this.colorFilter} />
						<Form.Checkbox className={styles.colorOption} id="greenSelect" value="green" image="css/green.png" onClick={this.colorFilter} />
						<Form.Checkbox className={styles.colorOption} id="redSelect" value="red" image="css/red.png" onClick={this.colorFilter} />
						<Form.Checkbox className={styles.colorOption} id="whiteSelect" value="white" image="css/white.png" onClick={this.colorFilter} />
					</fieldset>
					<Button basic color="black" type="submit" content="Submit" />
				</Form>
				<ul>
					{this.props.searchResults ? this.getPage() : null}
				</ul>
				<Icon name="chevron left" size="big" />
				<Icon name="chevron right" size="big"/>
			</Container>
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


export default connect(mapStateToProps)(SearchContainer);
