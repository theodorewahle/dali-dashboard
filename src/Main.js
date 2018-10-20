import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Search from "./screens/Search";
import Sidebar from "./screens/Sidebar";
import FilterBar from "./screens/FilterBar";

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
          <Col>
            <h1>DALI Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="8">
            <FilterBar />
          </Col>
          <Col xs="4">
            <Search />
          </Col>
        </Row>
        <Row>
          <Col xs="8">
            <Map />
          </Col>
          <Col xs="4">
            <Sidebar />
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
