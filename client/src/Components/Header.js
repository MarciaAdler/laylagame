import React from "react";
import { Row, Col, Button } from "react-bootstrap";
const styles = {
  button: {
    backgroundColor: "#D5C5C8",
    borderColor: "#D5C5C8",
    color: "#37323E",
    fontWeight: "bold",
    width: "102px",
    marginBottom: "10px",
    height: "50px",
    marginTop: "10px",
    marginRight: "2px",
    marginLeft: "2px",
    padding: "0",
    display: "inline-block",
    textAlign: "center",
    lineHeight: "50px",
  },
};
export default function Header() {
  return (
    <Row className="mb-4 justify-content-center">
      <Col className="col-4 col-md-2 text-center">
        <Button style={styles.button} href="/">
          Home
        </Button>
      </Col>
      <Col className="col-4 col-md-2 text-center">
        <Button style={styles.button} href="/math">
          Math Game
        </Button>
      </Col>
      <Col className="col-4 col-md-2 text-center">
        <Button style={styles.button} href="/match">
          Match Game
        </Button>
      </Col>
      <Col className="col-4 col-md-2 text-center">
        <Button style={styles.button} href="/drawmatch">
          Draw Match
        </Button>
      </Col>
      <Col className="col-4 col-md-2 text-center">
        <Button style={styles.button} href="/drawmatch">
          Word
        </Button>
      </Col>
    </Row>
  );
}
