import React, { Component } from "react";

import matchcards from "../matchcards.json";
import { Container, Row, Button } from "react-bootstrap";
import StartGame from "../Components/StartGame";
import Header from "../Components/Header";

class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matchcards,
      selected: [],
      startMessage: "",
      remainingcards: matchcards,
      show: true,
      checkMatch: false,
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

  // flipCard(card){
  //   // if(this.state.selected)
  //   console.log(card)

  //   if (card && this.state.show === false){
  //     this.setState({ show: true})

  //   } else{
  //     this.setState({ show: false})

  //   }
  // }

  render() {
    let selectedcards = [...this.state.selected];

    function selectCard(value) {
      if (this.state.selected && this.state.selected.length <= 1) {
        this.setState({ show: true });
        this.setState({ startMessage: "" });
        selectedcards.push(value);
        this.setState({ selected: selectedcards });
        if (selectedcards.length === 2) {
          if (selectedcards[0].value === selectedcards[1].value) {
            this.setState({ checkMatch: true });
          }
        }
      }
    }
    function confirmMatch() {
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

          this.setState({ checkMatch: true });
        } else {
          this.setState({ startMessage: "Incorrect match, Pick again" });
          this.setState({ selected: [] });
          selectedcards = [];

          this.setState({ show: false });
          this.setState({ checkMatch: false });
        }
      }
    }
    function start() {
      this.setState({ remainingcards: this.state.matchcards });
      console.log(this.state.remainingcards);
      this.shufflecards();

      this.setState({ show: false });
      selectedcards = [];
      this.setState({ selected: [] });
      this.setState({ startMessage: "" });
    }
    return (
      <Container className="mt-5 text-center">
        <Header />
        <div>
          <h3>Instructions:</h3>
          <p>
            {" "}
            To play select a card and then select a second card trying to find
            two cards that represent the same number.
          </p>
        </div>
        {this.state.startMessage}
        <StartGame
          //   shufflecards={shufflecards.bind(this)}
          start={start.bind(this)}
          //   matchcards={this.state.matchcards}
          selectCard={selectCard.bind(this)}
          show={this.state.show}
          // flipCard={this.flipCard}
          selected={this.state.selected}
          card={this.state.card}
          confirmMatch={confirmMatch.bind(this)}
          checkMatch={this.state.checkMatch}
        />
      </Container>
    );
  }
}
export default Match;
