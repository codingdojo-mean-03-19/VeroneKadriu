class Card {
    constructor(suit, stringValue, numValue) {
        this.suit = suit;
        this.numValue = numValue;
        this.stringValue = stringValue;
    }
    showCard() {
        console.log(`This is a ${this.numValue} of ${this.suit}`);
    }
}
class Deck {
    constructor() {
        this.deck = [];
    }

    create() {
        this.deck = [];
        const suits = ['Spades','Clubs', 'Hearts', 'Diamonds'];
        const values = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

        for (const suit of suits) {
            for (const value of values) {
                this.deck.push(`${ value } of ${ suit }`);
            }
        }

        return this;
    }

    shuffle() {

        for (let i = 0; i < this.deck.length; i++) {
            let temp = this.deck[i];
            let randomNumber = Math.floor(Math.random() * this.deck.length);
            this.deck[i] = this.deck[randomNumber];
            this.deck[randomNumber] = temp;
        }
    }

    reset() {

        this.cards = [];
        this.create();
    }

    deal() {
        return this.deck.pop();
    }

}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    draw(deck) {
        this.hand.push(deck.deal());
        return this;
    }

    discard() {
        this.hand.pop();
        return this;
    }
}

