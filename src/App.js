import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import logo from './logo.svg';
import Search from './screens/Search'
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="bg-black" xs="8">
            <h1>filter</h1>
          </Col>
          <Col className="bg-orange" xs="4">
            <Search/>
          </Col>
        </Row>
        <Row>
          <Col className="bg-black" xs="8">
            <h1>map</h1>
          </Col>
          <Col className="bg-orange" xs="4">
            <h1>sidebar</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
