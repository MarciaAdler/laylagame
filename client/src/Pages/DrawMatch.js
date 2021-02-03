import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Header from "../Components/Header";
import drawmatchcards from "../drawmatchcards.json";
import DMStartGame from "../Components/DMStartGame";
class DrawMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card1: 0,
      card2: 0,
      startMessage: "",
      choosecards: [],
    };
  }
  render() {
    const cards = drawmatchcards;
    function shufflecards() {
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
      }
    }
    function start() {
      shufflecards();
      console.log(cards);
      this.setState({ choosecards: cards });
    }
    return (
      <Container className="mt-5 text-center">
        <Header />
        <div>
          <h3>Instructions</h3>
          <p></p>
        </div>
        {this.state.startMessage}
        <DMStartGame start={start.bind(this)} cards={this.state.chooseCards} />
      </Container>
    );
  }
}
export default DrawMatch;
