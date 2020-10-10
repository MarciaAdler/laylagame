import React from "react";
import { Row, Col } from "react-bootstrap";

function SelectedNumbers(props) {
  return (
    <div>
      <Row className="justify-content-center">
        <p>{props.startMessage}</p>
      </Row>
      <Row className="justify-content-center">
        {props.sum === props.goalValue && props.goalValue > 0 ? (
          <p>
            <strong>You Win! Press Start Game to play again</strong>
          </p>
        ) : (
          ""
        )}
        {props.sum > props.goalValue && props.goalValue > 0 ? (
          <p>
            <strong>You lose! Press start Game to play again</strong>
          </p>
        ) : (
          ""
        )}
      </Row>
      <Row className="justify-content-center">
        <Col className="col-12 col-md-6">
          <span>Selected Cards: </span>
          {props.selected.map((num) => (
            <span>{num}&nbsp; </span>
          ))}
        </Col>
        <Col>{props.sum > 0 ? <span>sum: {props.sum}</span> : ""}</Col>
      </Row>
    </div>
  );
}

export default SelectedNumbers;
