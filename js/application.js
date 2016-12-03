deck = new Deck()
game = new Game(deck)

$( '#houseCard1' ).addClass('backCard')
$( '#houseCard2' ).addClass('backCard')
$( '#playerCard1' ).addClass('backCard')
$( '#playerCard2' ).addClass('backCard')





// $( '#houseCard1' ).addClass('backCard')
// $( '#houseCard2' ).addClass(game.houseHand[1])
	
// $( '#playerCard1' ).addClass( game.playersHand[0])
// $( '#playerCard2' ).addClass( game.playersHand[1])

$( '#hit' ).click(function( event ) {
	event.preventDefault();
	if(game.getValue(game.playersHand) < 21){
	  if(game.playerHold == false){
	  	game.deal(0)

	  	$('.player').append('<div id="playerCard' + game.playersHand.length + '"class="spot mark size"></div>')
	    $( '#playerCard'+ game.playersHand.length.toString() ).addClass( game.playersHand[game.playersHand.length - 1])
	    
		if(game.getValue(game.playersHand) >= 21){
			$( '#hit' ).addClass('disabled')
	
			if(game.whoWon() == 1){
			 	$('#final').append('<strong><h3>Tie goes to the House: '+ game.getValue(game.houseHand) +'</h3></strong>')
			 }else if(game.whoWon() == 2){
			 	$('#final').append('<strong><h3>Player wins with a final total of: '+ game.getValue(game.playersHand) +'</h3></strong>')
			 }else{
			 	$('#final').append('<strong><h3>House wins with a final total of: '+ game.getValue(game.houseHand) +'</h3></strong>')
			 }

			$( '#hit' ).hide()
			$( '#hold' ).hide()

			$( '#houseCard1' ).removeClass('backCard')
			$( '#houseCard1' ).addClass(game.houseHand[0])
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

	$( '#houseCard1' ).removeClass('backCard')
	$( '#houseCard1' ).addClass(game.houseHand[0])
  }else{
  	 while(game.houseHand != false){
	  if(game.getValue(game.houseHand) <= 16){
	  	game.deal(1)

	  	$('.house').append('<div id="houseCard' + game.houseHand.length + '"class="spot mark size"></div>')
	    $( '#houseCard'+ game.houseHand.length.toString() ).addClass( game.houseHand[game.houseHand.length - 1])

	  }else{
	  	game.hold(1)
	  	break
	  }
  	}
  }
 if(game.whoWon() == 1){
 	$('#final').append('<strong><h3>Tie goes to the House: '+ game.getValue(game.houseHand) +'</h3></strong>')
 }else if(game.whoWon() == 2){
 	$('#final').append('<strong><h3>Player wins with a final total of: '+ game.getValue(game.playersHand) +'</h3></strong>')
 }else{
 	$('#final').append('<strong><h3>House wins with a final total of: '+ game.getValue(game.houseHand) +'</h3></strong>')
 }
 $( '#hit' ).hide()
 $( '#hold' ).hide()

 $( '#houseCard1' ).removeClass('backCard')
 $( '#houseCard1' ).addClass(game.houseHand[0])
});	