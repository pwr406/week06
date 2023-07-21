//Automated version of the card game WAR! 
//In this version we only have 2 players. We do not do anything special for a tie.
// The completed project should, when executed, do the following:
// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.


//started with a card class to be able to create cards. Used three parameters
//in the constructor; suit, rank, FaceValue. FaceValue is what the card displays, while
//rank is what the value actually is.

class Card {
    constructor (suit, rank, faceValue) {
        this.suit = suit;
        this.rank = rank;
        this.faceValue = faceValue;
    }
}

//created a deck class. Most of the game methods are included in here. 
//Start with an empty array for the deck which will be crated when the newDeck
//method is called. Created arrays for Suits, ranks, and face values to pull from to make the cards.

class Deck {
    constructor () {
        this.deck = [];
        this.suits = ["♠", "♣", "♥", "♦"];
        this.ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.faceValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
        
    }
    //newDeck method creates the new deck by using 2 for loops. the first iterates through
    //the face values, while the second goes through the suits. 
    //we use this.deck.push to create a new card that has a suit, rank and face value.

    newDeck() {
        for (let i = 0; i <this.faceValues.length; i++) {
            
            for( let s = 0; s < this.suits.length; s++) {
                this.deck.push(new Card(this.suits[s],this.ranks[i], this.faceValues[i]))
            }
        }
        
    }

    //used the Fisher-Yates shuffle to shuffle the deck.
    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let shuffle = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[shuffle]] = [this.deck[shuffle], this.deck[i]]
        }
    }
    //the deal method splits deck between both players by using splice.
    deal() {
        let dealDeck = this.deck;
        player1.hand = dealDeck.splice(0, 26);
        player2.hand = dealDeck.splice(0, 26);
       
    }
    
    //to play the cards, I created a method that uses a for loop that goes through 26 times. 
    //it uses console.log to display the players and their cards. Then I used an if/else/if statement
    //to compare the hand rank to see who gets the point.
    //I used an additional if/else if statement to compated the scores at the end of the loop to see who won.

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

//player class to create a player with a name, empty array for hand and 0 score to start.

class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }   
}


//created function to start the game that would create the new deck, and call the methods to get the game 
//ready and run.

function start() {        
    const deck = new Deck();
    deck.newDeck();
    deck.shuffleDeck();
    deck.deal();
    deck.playCards(); 
}

//I wanted to have an introduction to the game and allow player names to be chosen.

alert (`Welcome to the Bleeding Place. Two enter, only one may leave.`)
let player1 = new Player(prompt('Welcome to the arena. What is your name warrior?'));
let player2 = new Player(prompt('A brave challenger emerges. Name yourself:'));

//calling the start function to start the game.

start();


