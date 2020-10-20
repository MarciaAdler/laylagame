import React from "react";
import { Container, Col } from "react-bootstrap";

const styles = {
  card: {
    height: "100px",
    weight: "auto",
    margin: "20px",
    border: "solid",
    borderColor: "blue",
  },
};
function MatchCard(props) {
  return (
    <Col className="col-6 col-md-3">
      <img
        style={styles.card}
        src={props.image}
        alt={props.value}
        onClick={() => {
          props.selectCard(props);
        }}
      />
    </Col>
  );
}

export default MatchCard;
