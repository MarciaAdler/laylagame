import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import MatchCard from "../Components/MatchCard";
import matchcards from "../matchcards.json";
function StartGame(props) {
  return (
    <div>
      <Row>
        <Col>
          <Button
            onClick={() => {
            props.start();
            }}
          >
          Start Game
        </Button>
      </Col>
      <Col>
          <Button onClick={()=>{props.confirmMatch()}}>Confirm Match</Button>
      </Col>
      <Col>
          <Button>No Match</Button>
      </Col>
    </Row>
      
      <div>
        <Row className="justify-content-center">
          {matchcards.map((card) => (
            <MatchCard
              key={card.id}
              id={card.id}
              value={card.value}
              image={card.image}
              selectCard={props.selectCard}
              show={props.show}
              selected={props.selected}
              card={props.show}
              // flipCard={props.flipCard}
              checkMatch={props.checkMatch}
              //   matchCard={props.matchCard}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}
export default StartGame;
