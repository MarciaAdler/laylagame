import React, { Component } from "react";

import matchcards from "../matchcards.json";
import { Container, Row, Button } from "react-bootstrap";
import StartGame from "../Components/StartGame";

class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchcards,
      selected: [],
      startMessage: "",
    };
    this.shufflecards = this.shufflecards.bind(this);
  }
  shufflecards = () => {
    for (let i = this.state.matchcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.state.matchcards[i];
      this.state.matchcards[i] = this.state.matchcards[j];
      this.state.matchcards[j] = temp;
    }
    console.log("test");
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
    // function shufflecards() {
    //   for (let i = this.state.matchcards.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * i);
    //     const temp = this.state.matchcards[i];
    //     this.state.matchcards[i] = this.state.matchcards[j];
    //     this.state.matchcards[j] = temp;
    //   }
    //   console.log("test");
    // }
    function start() {
      this.shufflecards();
      this.setState({ selected: [] });
    }
    return (
      <Container className="mt-5">
        <StartGame
          //   shufflecards={shufflecards.bind(this)}
          start={start.bind(this)}
          //   matchcards={this.state.matchcards}
          selectCard={selectCard.bind(this)}
        />
      </Container>
    );
  }
}
export default Match;
