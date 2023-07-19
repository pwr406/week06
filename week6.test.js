const expect = chai.expect

describe("Check deal method", function(){

    it("Checks that each player has 26 cards in their hand", function(){
        let player1 = new Player()
        let player2 = new Player()
        let deck = new Deck()
        deck.newDeck();
        deck.shuffleDeck();
        deck.deal();
        
        
    })
    expect(player1.hand).to.have.lengthOf(26)
        expect(player2.hand.length).to.equal(26);
})