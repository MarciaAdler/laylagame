import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Header from "../Components/Header";
import drawmatchcards from "../drawmatchcardsimages.json";
import DMStartGame from "../Components/DMStartGame";
import drawcards from "../drawmatchcardsnumbers.json";
class DrawMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card1: 0,
      card2: 0,
      startMessage: "",
      choosecards: [],
      cardtomatch: 0,
      flip: false,
      run: 0,
    };
  }
  render() {
    const cards = drawmatchcards;
    const drawacard = drawcards;
    function shufflecards() {
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
      }
    }
    function shuffledrawcards() {
      for (let i = drawacard.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = drawacard[i];
        drawacard[i] = drawacard[j];
        drawacard[j] = temp;
      }
    }
    function selectCard(card) {
      console.log(card);
      if (this.state.card2 === 0) {
        this.setState({ card2: card });
        this.setState({ flip: true });
        this.setState({ startMessage: "" });
      }
    }
    function noMatch() {
      if (this.state.card1.value !== this.state.card2.value) {
        this.setState({ flip: false });
        this.setState((prevState) => {
          return { run: prevState.run + 1 };
        });
        this.setState({ card2: 0 });
      } else {
        this.setState({
          startMessage: "You have a match, please try again!",
        });
      }
    }
    function match() {
      if (this.state.card1.value === this.state.card2.value) {
        for (let i = this.state.choosecards.length - 1; i >= 0; i--) {
          const element = this.state.choosecards[i];
          if (element.id === this.state.card2.id) {
            this.state.choosecards.splice(i, 1);
          }
        }
        if (this.state.choosecards.length < 1) {
          this.setState({
            startMessage: "Congrats! You Win! Click start to play again!",
          });
        } else {
          this.setState({ startMessage: "Match!" });
        }
        this.setState((prevState) => {
          return { cardtomatch: prevState.cardtomatch + 1 };
        });
        this.setState({ card1: drawacard[this.state.cardtomatch] });
      } else {
        this.setState({
          startMessage: "No match, try again!",
        });
        this.setState({ flip: false });
        this.setState((prevState) => {
          return { run: prevState.run + 1 };
        });
        this.setState({ card2: 0 });
      }
    }
    function start() {
      shufflecards();
      shuffledrawcards();
      console.log(cards);
      this.setState({ choosecards: cards });
      this.setState({ card1: drawacard[this.state.cardtomatch] });
    }
    return (
      <Container className="mt-5 text-center">
        <Header />
        <div>
          <h3>Instructions</h3>
          <p></p>
        </div>
        {this.state.startMessage}
        <DMStartGame
          start={start.bind(this)}
          cards={this.state.choosecards}
          card1={this.state.card1}
          card2={this.state.card2}
          selectCard={selectCard.bind(this)}
          flip={this.state.flip}
          noMatch={noMatch.bind(this)}
          run={this.state.run}
          match={match.bind(this)}
        />
      </Container>
    );
  }
}
export default DrawMatch;
