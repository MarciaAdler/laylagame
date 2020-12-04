import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";

const styles = {
  card: {
    height: "100px",
    weight: "auto",
    margin: "20px",
  },
};
function MatchCard(props) {
  const [flip, setFlip] = useState(false)
  function flipCard(card){
    console.log(props.selected.length)
    if(flip === false){
      setFlip(true)
    } else {
      setFlip(false)
    }
  }  

  function checkMatch(){
    if(props.checkMatch === false) {
      setFlip(false)
    }
  }

      // if (card && this.state.show === false){
      //   this.setState({ show: true})
  
      // } else{
      //   this.setState({ show: false})
        
      // }
    
  return (
    <Col className="col-6 col-md-3 col-lg-3">
      {flip === false ? (
        <img
          style={styles.card}
          src={"../images/questionmarkcard.png"}
          alt="flip card"
          onClick={() => {
            props.selectCard(props);
            
            flipCard(props.id)
          }}
        />
      ) : (
        <img
          style={styles.card}
          src={props.image}
          alt={props.value}
          
        />
      )}
    </Col>
  );
}

export default MatchCard;
