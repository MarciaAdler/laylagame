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
    for (let i = this.state.matchcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.state.matchcards[i];
      this.state.matchcards[i] = this.state.matchcards[j];
      this.state.matchcards[j] = temp;
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
        selectedcards.push(value.value);
        const index = this.state.matchcards.indexOf(value.id);
        this.state.indexes.push(index);
        this.setState({ selected: selectedcards });
        if (selectedcards.length === 2) {
          if (selectedcards[0] === selectedcards[1]) {
            this.setState({ startMessage: "Match! Pick again" });
            this.setState({ selected: [] });
            const remainingCards = [];
            for (let i = 0; i < this.state.matchcards.length; i++) {
              const element = this.state.matchcards[i];
              if (element.value === selectedcards[0]) {
                this.state.matchcards.splice(i, 1);
              }
            }
            console.log(this.state.matchcards);

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
