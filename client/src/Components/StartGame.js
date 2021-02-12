import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import MatchCard from "../Components/MatchCard";
import matchcards from "../matchcards.json";
const styles = {
  correct: {
    color: "darkgreen",
  },
  wrong: {
    color: "red",
  },
  button: {
    backgroundColor: "#ABA9C3",
    color: "black",
    border: "grey",
  },
};
function StartGame(props) {
  return (
    <div>
      <Row>
        <Col>
          <Button
            style={styles.button}
            onClick={() => {
              props.start();
            }}
          >
            Start Game
          </Button>
        </Col>
        <Col>
          <Button
            style={styles.button}
            onClick={() => {
              props.confirmMatch();
            }}
          >
            Confirm Match &nbsp;
            <i class="fas fa-check-circle" style={styles.correct}></i>
          </Button>
        </Col>
        <Col>
          <Button
            style={styles.button}
            onClick={() => {
              props.noMatch();
            }}
          >
            No Match &nbsp;
            <i class="far fa-times-circle" style={styles.wrong}></i>
          </Button>
        </Col>
      </Row>

      <div>
        <Row className="justify-content-center">
          {props.remainingcards.map((card) => (
            <MatchCard
              key={card.id}
              id={card.id}
              value={card.value}
              image={card.image}
              showcard={card.showcard}
              selectCard={props.selectCard}
              show={props.show}
              selected={props.selected}
              card={props.show}
              // flipCard={props.flipCard}
              checkMatch={props.checkMatch}
              confirmMatch={props.confirmMatch}
              run={props.run}
              flip={props.flip}
              //   matchCard={props.matchCard}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}
export default StartGame;
