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
      indexes: [],
      remainingcards: [],
    };
    this.shufflecards = this.shufflecards.bind(this);
  }
  shufflecards = () => {
    for (let i = this.state.remainingcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.state.matchcards[i];
      this.state.remainingcards[i] = this.state.remainingcards[j];
      this.state.remainingcards[j] = temp;
    }
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
      if (this.state.selected && this.state.selected.length <= 1) {
        this.setState({ startMessage: "" });
        selectedcards.push(value);

        this.setState({ selected: selectedcards });
        if (selectedcards.length === 2) {
          if (selectedcards[0].value === selectedcards[1].value) {
            this.setState({ startMessage: "Match! Pick again" });
            this.setState({ selected: [] });
            for (let i = 0; i < this.state.remainingcards.length; i++) {
              const element = this.state.remainingcards[i];
              if (
                element.id === selectedcards[0].id ||
                element.id === selectedcards[1].id
              ) {
                this.state.remainingcards.splice(i, 1);
              }
            }
            console.log(this.state.remainingcards);
            selectedcards = [];
          } else {
            this.setState({ startMessage: "Incorrect match, Pick again" });
            this.setState({ selected: [] });
            selectedcards = [];
          }
        }
      }
    }

    function start() {
      this.setState({ remainingcards: this.state.matchcards });
      this.shufflecards();
      selectedcards = [];
      this.setState({ selected: [] });
      this.setState({ startMessage: "" });
    }
    return (
      <Container className="mt-5">
        {this.state.startMessage}
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
