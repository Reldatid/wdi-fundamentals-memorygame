console.log("Up And Running!");
var cards = ['king', 'king', 'queen', 'queen'];
var cardsInPlay = [];
function flipCard(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
function checkForMatch() {
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!1");
		}
		else{
			alert("Sorry, try again...");
		}
		while(cardsInPlay.length > 0){
			cardsInPlay.pop();
		}
	}
}
flipCard(0);
flipCard(2);
flipCard(0);
flipCard(1);
