import React, { useEffect, useState } from "react";
import { Container, Col } from "react-bootstrap";

const styles = {
  card: {
    height: "100px",
    weight: "auto",
    margin: "20px",
  },
};
function MatchCard(props) {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (props.flip === true && flip === true) {
      flipCard(props.id);
    }
  }, [props.run]);

  function flipCard(card) {
    if (flip === false) {
      setFlip(true);
    } else if (flip === true) {
      setFlip(false);
    }
  }

  return (
    <Col className="col-6 col-md-3 col-lg-3">
      {flip === false ? (
        <img
          style={styles.card}
          src={"../images/questionmarkcard.png"}
          alt="flip card"
          onClick={() => {
            props.selectCard(props);

            flipCard(props.id);
          }}
        />
      ) : (
        <img
          style={styles.card}
          src={props.image}
          alt={props.value}
          onClick={() => {
            props.selectCard(props);

            flipCard(props.id);
          }}
        />
      )}
    </Col>
  );
}

export default MatchCard;
