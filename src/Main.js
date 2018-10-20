import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
import Search from "./screens/Search";
import Sidebar from "./screens/Sidebar";

import Map from "./screens/Map";

import { getMembers } from "./redux/members/Api";

class Main extends Component {
  componentWillMount() {
    this.props.getMembers();
  }
  render() {
    return (
      <Container>
        <Row>
          <Col className="bg-pink" xs="8">
            <h1>filter</h1>
            <Button>Get Members</Button>
          </Col>
          <Col className="bg-purple" xs="4">
            <Search />
          </Col>
        </Row>
        <Row>
          <Col className="bg-yellow" xs="8">
            <Map />
          </Col>
          <Col className="bg-orange" xs="4">
            <Sidebar/>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ members }) => ({ members });
const mapDispatchToProps = {
  getMembers
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
