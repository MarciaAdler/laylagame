import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
const styles = {
  card: { height: "100px", weight: "auto", margin: "20px" },
};
function ChooseCard(props) {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (flip === true) {
      flipCard(props.card.id);
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
          onClick={() => {
            flipCard(props.card);
            props.selectCard(props.card);
          }}
        />
      ) : (
        <img style={styles.card} src={props.card.image} />
      )}
    </Col>
  );
}
export default ChooseCard;
