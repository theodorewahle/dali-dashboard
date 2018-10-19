import React, { Component } from "react";
import { Input, InputGroup, Button, Row, Col } from "reactstrap";

class Search extends Component {
  render() {
    return (
      <Row>
        <Col>
          <h3>DALI Members</h3>
          <InputGroup>
            <Input placeholder="last name" />
          </InputGroup>
          <Button>Search</Button>
        </Col>
      </Row>
    );
  }
}

export default Search;
