console.log("Up And Running!");
var cards = ['king', 'king', 'queen', 'queen'];
var cardsInPlay = [];
var cardOne = cards[0];
console.log( cardOne + " flipped");
var cardTwo = cards[2];
console.log( cardTwo + " flipped");
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!1");
	}
	else{
		alert("Sorry, try again...");
	}
}