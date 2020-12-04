import React from "react";
import { Container, ListGroup, ListGroupItem, Col, Row } from "react-bootstrap";
const styles = {
  list: {
    width: "100%",
    marginTop: "50px",
  },
  intro: {
    color: "#2B2D42",
    textAlign: "center",
  },
  maincontainer: {
    paddingBottom: "100px",
    padding: "50px",
  },
  listitem: {
    backgroundColor: "#D5C5C8",
    marginBottom: "20px",
    width: "200px",
    textAlign: "center",
  },
  listtext: {
    color: "#2B2D42",
    fontWeight: "bold",
  },
};
export default function Main() {
  return (
    <Container className="mt-5" style={styles.maincontainer}>
      <div style={styles.intro}>
        <h1>Welcome to Layla's Games</h1>
        <h5>
          The games on this site are intended for elementary aged kids. I hope
          your kids enjoy playing them and learn something.
        </h5>
      </div>

      <Row style={styles.list} className="d-flex">
        <Col className="col-12 col-md-6 mx-auto justify-content-center">
          <ListGroupItem
            style={styles.listitem}
            className="mx-auto justify-content-center"
          >
            <a style={styles.listtext} href="/Math">
              Math Game
            </a>
          </ListGroupItem>
        </Col>
        <Col className="col-12 col-md-6">
          <ListGroupItem
            style={styles.listitem}
            className="mx-auto justify-content-center"
          >
            <a style={styles.listtext} href="/Match">
              Match Game
            </a>
          </ListGroupItem>
        </Col>
      </Row>
    </Container>
  );
}
