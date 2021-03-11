import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Header";
import flashcards from "../flashcardimages.json";
import WordStartGame from "../Components/WordStartGame";
const styles = {
  instructions: {
    marginLeft: "30px",
    marginRight: "30px",
  },
};
class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagecards: [],
      letter: "",
      startMessage: "",
      cardtomatch: 1,
    };
  }
  nextCard() {
    this.setState((prevState) => {
      return { cardtomatch: prevState.cardtomatch + 1 };
    });
  }
  render() {
    const cards = [];
    const words = flashcards;
    function shufflecards() {
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
      }
    }
    function shufflewords() {
      for (let i = words.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = words[i];
        words[i] = words[j];
        words[j] = temp;
      }
    }
    function start() {
      flashcards.forEach((card) => {
        cards.push(card);
      });
      shufflecards();
      shufflewords();
      this.setState({ imagecards: cards });
      this.setState({ letter: words[0].letter });
      console.log(cards);
      console.log(words);
    }
    function selectCard(card) {
      console.log(card);
      if (card.letter === this.state.letter) {
        this.setState({
          startMessage: `Correct ${card.value} starts with a(n) "${this.state.letter}"`,
        });
        this.nextCard();
        this.setState({ letter: words[this.state.cardtomatch].letter });
      } else {
        this.setState({ startMessage: `Incorrect. Try again.` });
      }
    }
    return (
      <Container className="mt-5 text-center">
        <Header />
        <div>
          <h3>Instructions:</h3>
          <p style={styles.instructions}> Add instructions here</p>
        </div>

        <WordStartGame
          start={start.bind(this)}
          cards={this.state.imagecards}
          wordcards={words}
          letter={this.state.letter}
          selectCard={selectCard.bind(this)}
          startMessage={this.state.startMessage}
        ></WordStartGame>
      </Container>
    );
  }
}
export default Word;
