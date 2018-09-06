console.log("Up And Running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
console.log(cards);
var cardsInPlay = [];
function flipCard() {
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].suit);
	console.log("User flipped " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
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
function createBoard() {
	for (var i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}
createBoard();
