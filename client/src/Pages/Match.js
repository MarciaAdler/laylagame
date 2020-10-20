import React, { Component } from "react";
import MatchCard from "../Components/MatchCard";
import matchcards from "../matchcards.json";
import { Container, Row } from "react-bootstrap";
class Match extends Component {
  state = {
    matchcards,
    selected: [],
    startMessage: "",
  };

  render() {
    let cardvalue = 0;
    let selectedcards = [...this.state.selected];
    function matchCard() {
      this.state.matchcards.filter((card) => {
        console.log(card.value);
        cardvalue = card.value;
      });
    }

    function selectCard(value) {
      if (selectedcards && selectedcards.length < 2) {
        selectedcards.push(value.value);
        this.setState({ selected: selectedcards });
        console.log(value.value);
      } else {
        this.setState({ startMessage: "Press Start Game to begin" });
      }
    }
    return (
      <Container className="mt-5">
        <Row className="justify-content-center">
          {this.state.matchcards.map((card) => (
            <MatchCard
              key={card.id}
              id={card.id}
              value={card.value}
              image={card.image}
              selectCard={selectCard.bind(this)}
              matchCard={matchCard}
            />
          ))}
        </Row>
      </Container>
    );
  }
}
export default Match;
