const React = require('react');
const ReactDOM = require('react-dom');

class Card extends React.Component {
	render() {
		return (
			<div>
				<ul>
					<li className="cardName">{this.props.name}</li>
					<li className="cardManacost">{this.props.name}</li>
					<li className="cardCmc">{this.props.cmc}</li>
					<li className="cardColors">{this.props.colors}</li>
					<li className="cardType">{this.props.type}</li>
					<li className="cardSupertypes">{this.props.supertypes}</li>
					<li className="cardSubtypes">{this.props.subtypes}</li>
					<li className="cardRarity">{this.props.rarity}</li>
					<li className="cardSet">{this.props.set}</li>
					<li className="cardText">{this.props.text}</li>
					<li className="cardArtist">{this.props.artist}</li>
					<li className="cardPower">{this.props.power}</li>
					<li className="cardToughness">{this.props.toughness}</li>
					<li className="cardImage">{this.props.imageUrl}</li>
					<li className="cardRulings">{this.props.rulings}</li>
				</ul>
			</div>
		)
	}
};

module.exports = Card;
