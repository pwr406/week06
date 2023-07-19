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
            console.log(`${player1.name}'s card is: ${player1.hand[i].faceValue}${player1.hand[i].suit}\n${player2.name}'s card is: ${player2.hand[i].faceValue}${player2.hand[i].suit}`);
            
            if (player1.hand[i].rank > player2.hand[i].rank) {
                player1.score += 1;
                console.log (`${player1.name} wins the round. Current score is ${player1.name}:${player1.score} to ${player2.name}:${player2.score}`);
            } else if (player1.hand[i].rank < player2.hand[i].rank) {
                player2.score += 1;                
                console.log (`${player2.name} wins the round. Current score is ${player1.name}:${player1.score} to ${player2.name}:${player2.score}`);
            }else {
                console.log (`Tie! Current score is ${player1.name}:${player1.score} to ${player2.name}:${player2.score}`)
            }
    
        }

         console.log(`Final Scores:\n${player1.name}: ${player1.score}\n${player2.name}: ${player2.score}`);

        if (player1.score > player2.score) {
            console.log( `${player1.name} is the victor. Rest in peace ${player2.name}.`);
        } else if (player1.score < player2.score) {
            
            console.log(`${player2.name} is the victor. Rest in peace ${player1.name}.`);
        }

    };
        
        
}


class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }   
}



function start() {        
    const deck = new Deck();
    deck.newDeck();
    deck.shuffleDeck();
    deck.deal();
    deck.playCards(); 
}
alert (`Welcome to the Bleeding Place. Two enter, only one may leave.`)
let player1 = new Player(prompt('Welcome to the arena. What is your name warrior?'));
let player2 = new Player(prompt('A brave challenger emerges. Name yourself:'));
start();


