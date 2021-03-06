import React, { Component } from "react";
import { connect } from "react-redux";
import { Input, Row, Col } from "reactstrap";

import { filterMembers } from "../redux/members/Api";

class Search extends Component {
  constructor(props) {
    super(props);

    this.submitSearch = this.submitSearch.bind(this);
  }

  submitSearch(term) {
    this.props.filterMembers(term.target.value);
  }

  render() {
    return (
      <Row className="mt2 mb3 ">
        <Col>
          <Row>
            <Col>
              <h3>Search</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input onChange={this.submitSearch} placeholder="name" />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapDispatchToProps = {
  filterMembers
};

const mapStateToProps = ({ members }) => ({ members });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
