import React, { Component } from "react";
import matchcards from "../matchcards.json";
import { Container, Row, Button } from "react-bootstrap";
import StartGame from "../Components/StartGame";
import Header from "../Components/Header";
const styles = {
  instructions: {
    marginLeft: "30px",
    marginRight: "30px",
  },
};
class Match extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // gamecards: matchcards,
      selected: [],
      startMessage: "",
      remainingcards: [],
      show: true,
      checkMatch: true,
      run: 0,
      flip: false,
    };
  }

  // shufflecards = () => {
  //   for (let i = this.state.remainingcards.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * i);
  //     const temp = matchcards[i];
  //     this.state.remainingcards[i] = this.state.remainingcards[j];
  //     this.state.remainingcards[j] = temp;
  //   }
  //   console.log(this.state.remainingcards);
  // };

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
    const startcards = [];
    function shufflecards() {
      for (let i = startcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = startcards[i];
        startcards[i] = startcards[j];
        startcards[j] = temp;
      }
    }
    function selectCard(card) {
      this.setState({ checkMatch: true });
      if (this.state.selected && this.state.selected.length <= 1) {
        card = { ...card, showcard: true };
        this.setState({ show: true });

        this.setState({ flip: true });

        this.setState({ startMessage: "" });
        selectedcards.push(card);
        this.setState({ selected: selectedcards });
        // if (selectedcards.length === 2) {
        //   if (selectedcards[0].value === selectedcards[1].value) {
        //     this.setState({ checkMatch: true });
        //   }
        // }
      }
    }

    function confirmMatch() {
      if (selectedcards.length === 2) {
        if (selectedcards[0].value === selectedcards[1].value) {
          this.setState({ selected: [] });
          for (let i = this.state.remainingcards.length - 1; i >= 0; i--) {
            const element = this.state.remainingcards[i];
            if (
              element.id === selectedcards[0].id ||
              element.id === selectedcards[1].id
            ) {
              this.state.remainingcards.splice(i, 1);
            }
          }
          if (this.state.remainingcards.length < 1) {
            this.setState({
              startMessage: "Congrats! You Win! Click start to play again!",
            });
          } else {
            this.setState({ startMessage: "Match! Pick again" });
          }
          // this.setState({ flip: false });

          selectedcards = [];
          this.setState({ show: false });
          this.setState({ checkMatch: false });
        } else {
          // this.setState({ flip: false });
          this.setState({ startMessage: "Incorrect, try again!" });
          // this.state.selected.forEach((card) => {
          //   card = { ...card, showcard: false };
          // });
          // this.setState((prevState) => {
          //   return { run: prevState.run + 1 };
          // });
          // console.log(this.state.selected);
          // this.setState({ selected: [] });
          // selectedcards = [];

          // this.setState({ show: false });
          // this.setState({ checkMatch: false });
        }
      }
    }
    function noMatch() {
      if (selectedcards.length === 2) {
        if (selectedcards[0].value !== selectedcards[1].value) {
          this.setState({ startMessage: "Incorrect match, Pick again" });
          this.state.selected.forEach((card) => {
            card = { ...card, showcard: false };
          });
          this.setState((prevState) => {
            return { run: prevState.run + 1 };
          });

          this.setState({ selected: [] });
          selectedcards = [];

          this.setState({ show: false });
          this.setState({ checkMatch: false });
        } else {
          this.setState({ startMessage: "Incorrect, try again!" });
        }
      }
    }
    function start() {
      matchcards.forEach((card) => {
        card["showcard"] = false;
        startcards.push(card);
      });

      shufflecards();

      this.setState({ remainingcards: startcards });

      // this.setState({ show: false });
      selectedcards = [];
      this.setState({ selected: [] });
      this.setState({ startMessage: "" });
    }
    return (
      <Container className="mt-5 text-center">
        <Header />
        <div>
          <h3>Instructions:</h3>
          <p style={styles.instructions}>
            {" "}
            To play click "Start Game" to generate the cards. Select a card and
            then select a second card trying to find two cards that represent
            the same number. If you have a match, click "Confirm Match" and
            select again. If your two cards don't match, click "No Match" and
            select again. Keep playing until all cards have been matched.
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
          // card={this.state.card}
          confirmMatch={confirmMatch.bind(this)}
          checkMatch={this.state.checkMatch}
          remainingcards={this.state.remainingcards}
          run={this.state.run}
          flip={this.state.flip}
          noMatch={noMatch.bind(this)}
        />
      </Container>
    );
  }
}
export default Match;
