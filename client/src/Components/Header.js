import React from "react";
import { Row, Col, Button } from "react-bootstrap";
const styles = {
  button: {
    backgroundColor: "#D5C5C8",
    borderColor: "#D5C5C8",
    color: "#37323E",
    fontWeight: "bold",
    width: "125px",
    marginBottom: "10px",
  },
};
export default function Header() {
  return (
    <Row className="mb-4 justify-content-center">
      <Col className="col-4 col-md-3 text-center">
        <Button style={styles.button} href="/">
          Home
        </Button>
      </Col>
      <Col className="col-4 col-md-3 text-center">
        <Button style={styles.button} href="/math">
          Math Game
        </Button>
      </Col>
      <Col className="col-4 col-md-3 text-center">
        <Button style={styles.button} href="/match">
          Match Game
        </Button>
      </Col>
      <Col className="col-4 col-md-3 text-center">
        <Button style={styles.button} href="/drawmatch">
          Draw Match
        </Button>
      </Col>
    </Row>
  );
}
