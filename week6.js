class Card {
    constructor (suit, rank, faceValue) {
        this.suit = suit;
        this.rank = rank;
        this.faceValue = faceValue;
    }
}

class Deck {
    constructor () {
        this.deck = [];
        this.suits = ["♠", "♣", "♥", "♦"];
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.faceValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
    }

    newDeck() {
        for (let i = 0; i <this.faceValues.length; i++) {
            
            for( let s = 0; s < this.suits.length; s++) {
                this.deck.push(new Card(this.suits[s],this.ranks[i], this.faceValues[i]))
            }
        }
        return this.deck;
    }


    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let shuffle = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[shuffle]] = [this.deck[shuffle], this.deck[i]]
        }
    }

    deal() {
        let dealDeck = this.deck;
        player1.hand = dealDeck.splice(0, 26);
        player2.hand = dealDeck.splice(0, 26);
       
    }

    playCards() {
        for (let i = 0; i < 26; i++) {
            console.log(`${player1.name}'s card is: ${player1.hand[i].faceValue}${player1.hand[i].suit}
${player2.name}'s card is: ${player2.hand[i].faceValue}${player2.hand[i].suit}`);
            
            if (player1.hand[i].rank > player2.hand[i].rank) {
                player1.score += 1;
                console.log (`${player1.name} wins the round. Current score is ${player1.score} to ${player2.score}`);
            } else if (player1.hand[i].rank < player2.hand[i].rank) {
                player2.score += 1;                
                console.log (`${player2.name} wins the round. Current score is ${player1.score} to ${player2.score}`);
            }else {
                console.log (`Tie!`)
            }
    
        }

         console.log(`Final Scores: ${player1.name}: ${player1.score}
        ${player2.name}: ${player2.score}`);

        if (player1.score > player2.score) {
            console.log( `${player1.name} wins!`);
        } else if (player1.score < player2.score) {
            
            console.log(`${player2.name} wins!`);
        }

    };
        
        
}


class Player {
    constructor (name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
    
   

    describe(){
        return `${this.name} score is ${this.score}`
    }
}
// player1 = new Player(prompt('What is your name player 1?'));
// player2 = new Player(prompt(`What is your name player 2?`))
let player1 = new Player(prompt('What is your name player 1?'));
let player2 = new Player(prompt(`What is your name player 2?`));
let deck = new Deck();
deck.newDeck();
console.log(deck);
deck.shuffleDeck();
deck.deal();
console.log(player1.hand);
console.log(player2.hand);
deck.playCards();


