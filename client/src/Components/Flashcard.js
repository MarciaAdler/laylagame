import React from "react";
import { Col } from "react-bootstrap";
const styles = {
  flashcard: {
    height: "100px",
    margin: "10px",
    width: "100px",
  },
};
export default function Flashcard(props) {
  return (
    <Col className="col-6 col-md-3 col-lg-3 mt-4">
      <img
        src={props.image}
        alt={props.value}
        style={styles.flashcard}
        onClick={() => {
          props.selectCard(props.card);
        }}
      />
    </Col>
  );
}
