import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import Flashcard from "../Components/Flashcard";
const styles = {
  button: {
    backgroundColor: "#ABA9C3",
    color: "black",
    border: "grey",
  },
};
export default function WordStartGame(props) {
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
          Find a the card that starts with the letter "
          <strong>{props.letter}</strong>"
        </Col>
      </Row>
      <Row className="text-align-center mt-1">
        <Col>{props.startMessage}</Col>
      </Row>
      <div>
        <Row>
          {props.cards.map((card) => (
            <Flashcard
              key={card.id}
              value={card.value}
              letter={card.letter}
              card={card}
              image={card.image}
              selectCard={props.selectCard}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}
