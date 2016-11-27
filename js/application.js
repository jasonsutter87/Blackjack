deck = new Deck()
game = new Game(deck)

console.log("players hand: ",game.playersHand)
console.log("house hand: ",game.houseHand)
console.log("players total: ", game.getValue(game.playersHand)) 
console.log("house total: ", game.getValue(game.houseHand)) 

$( '#hit' ).click(function( event ) {
	event.preventDefault();
	if(game.getValue(game.playersHand) < 21){
	  if(game.playerHold == false){
	  	game.deal(0)
	    console.log("players hand: ",game.playersHand)
	    console.log("house hand: ",game.houseHand)
	    console.log("players total: ", game.getValue(game.playersHand)) 
		console.log("house total: ", game.getValue(game.houseHand))
		if(game.getValue(game.playersHand) >= 21){
			$( '#hit' ).addClass('disabled')
			game.whoWon()
			$( '#hit' ).hide()
			$( '#hold' ).hide()
	  	}
	  }
	}
});

$( '#hold' ).click(function( event ) {
  event.preventDefault();
  $( '#hit' ).addClass('disabled')
  game.hold(0)

  if(game.getValue(game.playersHand) >= 21){
	game.whoWon()
	$( '#hit' ).hide()
	$( '#hold' ).hide()
  }else{
  	 while(game.houseHand != false){
	  if(game.getValue(game.houseHand) <= 16){
	  	game.deal(1)
	  }else{
	  	game.hold(1)
	  	break
	  }
  	}
  }
 game.whoWon()
 $( '#hit' ).hide()
$( '#hold' ).hide()
});	