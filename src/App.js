import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
      <Row>
        <Col>
        <h1>map</h1>
        </Col>
        <Col>
        <h1>sidebar</h1>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
