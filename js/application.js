deck = new Deck()
game = new Game(deck)

$('#hit').on('click',function(e){
	e.preventDefault()
	game.deal(0)
})

$('#hold').on('click',function(e){
	e.preventDefault()
	game.hold()
})