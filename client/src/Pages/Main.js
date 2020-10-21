import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

export default function Main() {
  return (
    <Container>
      <h1>Welcome to Layla's Games</h1>
      <h3>
        The games on this site are intended for elementary aged kids. I hope
        your kids enjoy playing them and learn something.
      </h3>

      <ListGroup>
        <ListGroupItem>
          <a href="/Math">Math Game</a>
        </ListGroupItem>
        <ListGroupItem>
          <a href="/Match">Match Game</a>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
}
