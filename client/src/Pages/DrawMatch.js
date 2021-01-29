import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Header from "../Components/Header";
class DrawMatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card1: 0,
      card2: 1,
    };
  }
  render() {
    return (
      <Container className="mt-5 text-center">
        <Header />
        <div>
          <h3>Instructions</h3>
          <p></p>
        </div>
      </Container>
    );
  }
}
export default DrawMatch;
