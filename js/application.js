deck = new Deck()
game = new Game(deck)

if(localStorage.getItem('win') == null && localStorage.getItem('lost') == null){
	localStorage.setItem("win", 0)
	localStorage.setItem("lost", 0)
	$('#gameWon').html('0')
	$('#gameLost').html('0')
}else{	
	$('#gameWon').html(localStorage.getItem("win"))
	$('#gameLost').html(localStorage.getItem("lost"))
}

$( '#houseCard1' ).addClass('backCard')
$( '#houseCard2' ).addClass('backCard')
$( '#playerCard1' ).addClass('backCard')
$( '#playerCard2' ).addClass('backCard')

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
			 	var count = parseInt(localStorage.getItem("lost"))
			 	localStorage.setItem('lost', count + 1)
			 	$('#gameLost').html(localStorage.getItem("lost"))
			 }else if(game.whoWon() == 2){
			 	$('#final').append('<strong><h3>Player wins with a final total of: '+ game.getValue(game.playersHand) +'</h3></strong>')
			 	
			 	var count = parseInt(localStorage.getItem("win"))
			 	localStorage.setItem('win', count + 1)
			 	$('#gameWon').html(localStorage.getItem("win"))

			 }else{
			 	$('#final').append('<strong><h3>House wins with a final total of: '+ game.getValue(game.houseHand) +'</h3></strong>')
			 	var count = parseInt(localStorage.getItem("lost"))
			 	localStorage.setItem('lost', count + 1)
			 	$('#gameLost').html(localStorage.getItem("lost"))
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
	 	
	 	var count = parseInt(localStorage.getItem("lost"))
	 	localStorage.setItem('lost', count + 1)
	 	$('#gameLost').html(localStorage.getItem("lost"))
	 
	 }else if(game.whoWon() == 2){
	 	$('#final').append('<strong><h3>Player wins with a final total of: '+ game.getValue(game.playersHand) +'</h3></strong>')
	 	console.log("winnnnnning")
	 	console.log("winnnnnning")
	 	var count = parseInt(localStorage.getItem("win"))
	 	localStorage.setItem('win', count + 1)
	 	$('#gameWon').text(localStorage.getItem("win"))
	 
	 }else{
	 	$('#final').append('<strong><h3>House wins with a final total of: '+ game.getValue(game.houseHand) +'</h3></strong>')
	 	
	 	var count = parseInt(localStorage.getItem("lost"))
	 	localStorage.setItem('lost', count + 1)
 		$('#gameLost').html(localStorage.getItem("lost"))
	
	}
 $( '#hit' ).hide()
 $( '#hold' ).hide()

 $( '#houseCard1' ).removeClass('backCard')
 $( '#houseCard1' ).addClass(game.houseHand[0])
});	

$('#dealFirstHand').click(function(event){
	event.preventDefault()
	game.intialDeal()

	$( '#houseCard1' ).addClass('backCard')
	$( '#houseCard2' ).addClass(game.houseHand[1])
		
	$( '#playerCard1' ).addClass( game.playersHand[0])
	$( '#playerCard2' ).addClass( game.playersHand[1])
	$('#dealFirstHand').addClass('hidden')
	$('#dealHand').removeClass('hidden')
	$('#hit').removeClass('hidden')
	$('#hold').removeClass('hidden')
	$( '#playerCard1' ).removeClass('backCard')
	$( '#playerCard2' ).removeClass('backCard')
	$( '#houseCard2' ).removeClass('backCard')
})

$('#dealHand').click(function(event){
	event.preventDefault()
	if($('#houseCard1' ).hasClass('backCard') == true){
		var count = parseInt(localStorage.getItem("lost"))
	 	localStorage.setItem('lost', count + 1)
 		$('#gameLost').html(localStorage.getItem("lost"))
	}

	if(game.deck.deck.length > 6 ){

		if($('#hit').hasClass('disabled') == true){
			$('#hit').removeClass('disabled')
		}

		$('#hit').show()
		$('#hold').show()
		$('#final').children().remove()

		$.each(game.playersHand, function(index, element){
		game.pastCards.push(element)
		})

		$.each(game.houseHand, function(index, element){
			game.pastCards.push(element)
		})
		
		$.each(game.playersHand, function(index, element){
			$('#playerCard' + (index + 1)).remove()
		})

		$.each(game.houseHand, function(index, element){
			$('#houseCard' + (index + 1)).remove()
		})

		game.playersHand = []
		game.houseHand = []

		game.intialDeal()

		$('.player').append('<div id="playerCard1" class="spot mark size"></div>')
		$('.player').append('<div id="playerCard2" class="spot mark size"></div>')
		$('.house').append('<div id="houseCard1" class="spot mark size"></div>')
		$('.house').append('<div id="houseCard2" class="spot mark size"></div>')


		$.each(game.playersHand, function(index, element){
			$( '#playerCard'+ (index + 1)).addClass( element )
		})
		
		$( '#houseCard1' ).addClass('backCard')
		$( '#houseCard2' ).addClass(game.houseHand[1])
	}else{
		$('#dealHand').addClass('hidden')
		$('#resetGame').removeClass('hidden')
	}

	game.playerHold = false
	game.hosueHold = false
})


