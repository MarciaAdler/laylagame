import React from "react";

import { Col } from "react-bootstrap";
const styles = {
  card: {
    height: "100px",
    weight: "auto",
    margin: "20px",
    border: "solid",
    borderColor: "blue",
  },

  button: {
    width: "100px",
    height: "50px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "1em",
    marginTop: "20px",
  },
};
function Cards(props) {
  //   function selectCard(value) {
  //     sum += props.value;
  //     console.log(props.value);
  //   }
  return (
    <Col className="col-6 col-lg-3 col-md-4 col-sm-6">
      <img
        style={styles.card}
        src={props.image}
        onClick={() => {
          props.selectCard(props);
        }}
      />
    </Col>
  );
}

export default Cards;
