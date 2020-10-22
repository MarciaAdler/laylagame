import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
const styles = {
  list: {
    width: "50%",
    marginTop: "50px",
  },
  intro: {
    color: "#2B2D42",
  },
  maincontainer: {
    paddingBottom: "100px",
    paddingTop: "50px",
  },
  listitem: {
    backgroundColor: "#D5C5C8",
    marginBottom: "20px",
  },
  listtext: {
    color: "#2B2D42",
  },
};
export default function Main() {
  return (
    <Container className="mt-5" style={styles.maincontainer}>
      <div style={styles.intro}>
        <h1>Welcome to Layla's Games</h1>
        <h3>
          The games on this site are intended for elementary aged kids. I hope
          your kids enjoy playing them and learn something.
        </h3>
      </div>

      <ListGroup style={styles.list}>
        <ListGroupItem style={styles.listitem}>
          <a style={styles.listtext} href="/Math">
            Math Game
          </a>
        </ListGroupItem>
        <ListGroupItem style={styles.listitem}>
          <a style={styles.listtext} href="/Match">
            Match Game
          </a>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
}
