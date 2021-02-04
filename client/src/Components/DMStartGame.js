import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import ChooseCard from "../Components/ChooseCard";
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
};
function DMStartGame(props) {
  return (
    <div>
      <Row style={styles.row}>
        <Col>
          <Button
            onClick={() => {
              props.start();
            }}
          >
            Start
          </Button>
        </Col>

        <Col>
          <Button
            onClick={() => {
              props.match();
            }}
          >
            Match
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              props.noMatch();
            }}
          >
            No Match
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
