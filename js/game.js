//Creates a new deck of cards and shuffles them
var Deck = function(){
	this.deck = []	
	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 13; j++){
			if(i == 0){
				this.deck.push("D"+(j + 1).toString())
			}
			else if(i == 1){
				this.deck.push("S"+(j + 1).toString())
			}
			else if(i == 2){
				this.deck.push("H"+(j + 1).toString())
			}
			else{
				this.deck.push("C"+(j + 1).toString())
			}
		}
	}

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
	}
	shuffle(this.deck)
}

//Creates a new Blackjack game. It deals the first hand
var Game = function(deck){
	this.deck = deck
	this.playersHand = []
	this.houseHand = []
	this.playerHold = false
	this.houseHold = false
	
	this.playersHand.push(this.deck.deck.shift())
	this.playersHand.push(this.deck.deck.shift())
	this.houseHand.push(this.deck.deck.shift())
	this.houseHand.push(this.deck.deck.shift())
}

Game.prototype.deal = function(num){
	if(num == 0 ){
		this.playersHand.push(this.deck.deck.shift())
	}else{
		this.houseHand.push(this.deck.deck.shift())
	}
}

Game.prototype.hold = function(num){
	if(num == 0 ){
		this.playerHold = true
	}else{
		this.houseHold = true
	}
}

Game.prototype.whoWon = function(){
	if(game.getValue(game.playersHand) == game.getValue(game.houseHand)){
		console.log("******  Final Score  ******")
		console.log("Tie goes to the House: ", game.getValue(game.houseHand))
		console.log("players Final hand: ",game.playersHand)
		console.log("house Final hand: ",game.houseHand)
	}else if(game.getValue(game.playersHand) <= 21 && (game.getValue(game.playersHand) > game.getValue(game.houseHand))){
		console.log("******  Final Score  ******")
		console.log("Player wins with a final total of: ", game.getValue(game.playersHand))
		console.log("house Final total: ", game.getValue(game.houseHand))
		console.log("players Final hand: ",game.playersHand)
		console.log("house Final hand: ",game.houseHand)
	}else if(game.getValue(game.houseHand) <= 21 && (game.getValue(game.houseHand) > game.getValue(game.playersHand))){
		console.log("******  Final Score  ******")
		console.log("House wins with a final total of: ", game.getValue(game.houseHand))
		console.log("players Final total: ", game.getValue(game.playersHand))
		console.log("players Final hand: ",game.playersHand)
		console.log("house Final hand: ",game.houseHand)
	}else if(game.getValue(game.playersHand) > 21 ){
			console.log("******  Final Score  ******")
			console.log("House wins with a final total of: ", game.getValue(game.houseHand))
			console.log("players Final total: ", game.getValue(game.playersHand))
			console.log("players Final hand: ",game.playersHand)
			console.log("house Final hand: ",game.houseHand)
		
	}else{
		console.log("******  Final Score  ******")
		console.log("Player wins with a final total of: ", game.getValue(game.playersHand))
		console.log("house Final total: ", game.getValue(game.houseHand))
		console.log("players Final hand: ",game.playersHand)
		console.log("house Final hand: ",game.houseHand)
	}
}

Game.prototype.getValue = function(hands){
 	total = 0
 	for(var i = 0; i < hands.length; i++){
 		if(hands[i].slice(1) == 11 || hands[i].slice(1) == 12 || hands[i].slice(1) == 13){
 			total = total + parseInt("10")
 		}else if(hands[i].slice(1) == 1 && ( hands.length <= 3 || total <= 16)){
 			total = total + 11
 		}else{
 			total = total + parseInt(hands[i].slice(1))
 		}
 	}
 	return total
}
