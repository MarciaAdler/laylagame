import React from "react";
import { Button, Row } from "react-bootstrap";
import MatchCard from "../Components/MatchCard";
import matchcards from "../matchcards.json";
function StartGame(props) {
  return (
    <div>
      <Button
        onClick={() => {
          props.start();
        }}
      >
        Start Game
      </Button>
      <div>
        <Row className="justify-content-center">
          {matchcards.map((card) => (
            <MatchCard
              key={card.id}
              id={card.id}
              value={card.value}
              image={card.image}
              selectCard={props.selectCard}
              //   matchCard={props.matchCard}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}
export default StartGame;
