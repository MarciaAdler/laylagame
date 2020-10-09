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
    sum: 0,
    selected: [],
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

      console.log(this.state.goalValue);
    }
    function selectCard(value) {
      selectedcards.push(value.value);
      this.setState({ sum: this.state.sum + value.value });
      this.setState({ selected: selectedcards });
      console.log(value.value);

      console.log(this.state.selected);
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
          sum={this.state.sum}
          selected={this.state.selected}
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
