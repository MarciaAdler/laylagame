import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import ChooseCard from "../Components/ChooseCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const styles = {
  card1: {
    height: "100px",
    weight: "auto",
    margin: "20px",
  },
  row: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ABA9C3",
    color: "black",
    border: "grey",
  },

  wrong: {
    color: "red",
  },
  correct: {
    color: "darkgreen",
  },
};
function DMStartGame(props) {
  return (
    <div>
      <Row style={styles.row}>
        <Col>
          <Button
            style={styles.button}
            onClick={() => {
              props.start();
            }}
          >
            Start
          </Button>
        </Col>

        <Col>
          <Button
            style={styles.button}
            onClick={() => {
              props.match();
            }}
          >
            Match &nbsp;
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
      <Row>
        <Col>
          <img style={styles.card1} src={props.card1.image} />
        </Col>
      </Row>
      <div>
        <Row className="justify-content-center">
          {props.cards
            ? props.cards.map((card) => (
                <ChooseCard
                  key={card.id}
                  card={card}
                  card1={props.card1}
                  selectCard={props.selectCard}
                  card2={props.card2}
                  flip={props.flip}
                  run={props.run}
                />
              ))
            : ""}
        </Row>
      </div>
    </div>
  );
}
export default DMStartGame;
