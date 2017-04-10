# Magic the Gathering Deck Builder App

A simple deck builder for the Magic the Gathering card game utilizing mtg API
https://dkaf.github.io/mtg_react_capstone/

<img src="/screenshots/deck_builder_deck_screenshot.png">
<img src="/screenshots/deck_builder_screenshot.png">

## Installing
```
> git clone https://github.com/Dkaf/mtg_react_capstone.git
> npm install
```

## Launching
Dev Mode
```
> npm start
```
Production
```
> npm build
```

## Functionality
<ul>
	<li>User profiles</li>
	<li>Deck creation</li>
	<li>Card search with filters</li>
	<li>Add/remove cards</li>
	<li>Average cmc displayed above decks</li>
</ul>

## How it Works

### User profiles
Create a profile to start building and saving your favorite decks

### Creating a deck
To add a deck, use the simple deck creation form above the card search. Just enter a deck name and format and you're ready to start!

### Card Search
Use the card search bar and filters to find any card you need.

### Adding cards
Just click the name of the deck you want to edit, search for the card you want, and click the 'add card' button. Each card in your deck will also have an option to remove displayed right under the card.


## Technologies Used
React and redux were used to create the front end with node.js used for the backend. Card search data provided by [http://magicthegathering.io](http://magicthegathering.io/)

## Future Plans
<ul>
	<li>Deck Search</li>
	<li>User Search</li>
	<li>More deck statistics</li>
</ul>
