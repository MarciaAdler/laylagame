import React, { Component } from "react";
import Cards from "../Components/Cards";
import cards from "../cards.json";
import { Row, Container } from "react-bootstrap";
import GameButton from "../Components/GameButton";
const styles = {
  container: {
    marginTop: "50px",
  },
};
class Main extends Component {
  state = {
    cards,
  };

  render() {
    let cardvalue = 0;
    function card() {
      this.state.cards.filter((card) => {
        console.log(card.value);
        cardvalue = card.value;
      });
    }

    return (
      <Container style={styles.container}>
        <Row className="justify-content-center">
          {this.state.cards.map((card) => (
            <Cards key={card.id} value={card.id} image={card.image} />
          ))}
        </Row>

        <GameButton card={card} cardvalue={cardvalue} />
      </Container>
    );
  }
}

export default Main;
