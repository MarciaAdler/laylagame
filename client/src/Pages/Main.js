import React, { Component } from "react";
import Cards from "../Components/Cards";
import cards from "../cards.json";
import { Row, Container } from "react-bootstrap";
import GameButton from "../Components/GameButton";
import SelectedNumbers from "../Components/SelectedNumbers";
const styles = {
  container: {
    marginTop: "50px",
  },
};
class Main extends Component {
  state = {
    cards,
    goalValue: 0,
  };

  render() {
    let cardvalue = 0;
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

      console.log(this.state.goalValue);
    }
    return (
      <Container style={styles.container}>
        <GameButton
          card={card}
          cardvalue={cardvalue}
          start={start.bind(this)}
          goalValue={this.state.goalValue}
        />
        <SelectedNumbers
          cardvalue={cardvalue}
          goalValue={this.state.goalValue}
        />
        <Row className="justify-content-center">
          {this.state.cards.map((card) => (
            <Cards key={card.id} value={card.id} image={card.image} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Main;
