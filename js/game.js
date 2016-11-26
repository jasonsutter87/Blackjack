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