import React from "react";
import { Button, Col, Row } from "react-bootstrap";
function GameButton(props) {
  //   function start(min, max) {
  //     min = Math.ceil(10);
  //     max = Math.floor(30);
  //     props.goalValue = Math.floor(Math.random() * (max - min + 1)) + min;

  //     console.log(props.goalValue);
  //   }

  return (
    <Row className="mt-2 justify-content-center mb-3">
      <Col className="col-6">
        <Button
          onClick={() => {
            props.start();
          }}
        >
          Start Game
        </Button>
      </Col>

      {props.goalValue > 0 ? (
        <Col className="col-6">Goal Value: {props.goalValue}</Col>
      ) : (
        <Col>Goal Value: Click start game to generate goal value</Col>
      )}
    </Row>
  );
}

export default GameButton;
