import React from "react";
import { Button, Row, Col } from "react-bootstrap";

function DMStartGame(props) {
  return (
    <div>
      <Row>
        <Col>
          <Button
            onClick={() => {
              props.start();
            }}
          >
            Start
          </Button>
        </Col>
      </Row>
    </div>
  );
}
export default DMStartGame;
