import React, { Component } from "react";
import Cards from "../Components/Cards";
import cards from "../cards.json";
import { Row, Container, Col } from "react-bootstrap";
import GameButton from "../Components/GameButton";
import SelectedNumbers from "../Components/SelectedNumbers";
const styles = {
  container: {
    marginTop: "50px",
  },
  instructions: {
    marginRight: "40px",
    marginLeft: "40px",
    marginBottom: "40px",
  },
};
class Main extends Component {
  state = {
    cards,
    goalValue: 0,
    sum: 0,
    selected: [],
    startMessage: "",
  };

  render() {
    let cardvalue = 0;
    let selectedcards = [...this.state.selected];
    function card() {
      this.state.cards.filter((card) => {
        console.log(card.value);
        cardvalue = card.value;
      });
    }
    function start(min, max) {
      min = Math.ceil(10);
      max = Math.floor(30);
      this.setState({
        goalValue: Math.floor(Math.random() * (max - min + 1)) + min,
      });
      this.setState({ startMessage: "" });
      this.setState({ selected: [] });
      this.setState({ sum: 0 });
      console.log(this.state.goalValue);
    }

    function selectCard(value) {
      if (this.state.sum < this.state.goalValue) {
        selectedcards.push(value.value);
        this.setState({ sum: this.state.sum + value.value });
        this.setState({ selected: selectedcards });
        console.log(value.value);

        console.log(this.state.selected);
      } else {
        this.setState({ startMessage: "Press Start Game to begin" });
      }
    }
    return (
      <Container style={styles.container}>
        <div style={styles.instructions}>
          <h3>Instructions</h3>
          <p>
            Click start game to generate a random number. Once you have the Goal
            Value, click on the cards to add the values together to reach the
            Goal Value.
          </p>
        </div>

        <GameButton
          card={card}
          cardvalue={cardvalue}
          start={start.bind(this)}
          goalValue={this.state.goalValue}
        />
        <SelectedNumbers
          cardvalue={cardvalue}
          goalValue={this.state.goalValue}
          sum={this.state.sum}
          selected={this.state.selected}
          startMessage={this.state.startMessage}
        />
        <Row className="justify-content-center">
          {this.state.cards.map((card) => (
            <Cards
              key={card.id}
              value={card.id}
              image={card.image}
              selectCard={selectCard.bind(this)}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Main;
