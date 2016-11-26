describe("generates a deck of cards", function() {
  beforeEach(function() {
    deck = new Deck();
  });

  // it should not be empty
  // it("should not be empty", function(){
  //   expect(deck.deck).not.toBeNull();
  // });

  // // it should have 52 cards
  // it("should have 52 cards", function(){
  //   expect(deck.deck.length).toEqual(52);
  // });
 
  // // it should be shuffled
  // it("it should come shuffled", function(){
  //    expect().toEqual();
  //   pending();
  // });


});

//board setup
describe("Sets up game board", function() {
  beforeEach(function() {
    deck = new Deck();
    game = new Game(deck);
  });

  
  // it("should have 4 ace piles", function(){
  //    expect(game.aces.length).toEqual(4);
  // });

  
});

 // dealing
describe("Dealing", function() {
  beforeEach(function() {
    deck = new Deck();
    game = new Game(deck);
  });
 
  // it("deal should deal the first 3 cards", function(){
  //   game.cardDeal(3)
  //   expect(game.deal[1].length).toEqual(3);
  // });

});

