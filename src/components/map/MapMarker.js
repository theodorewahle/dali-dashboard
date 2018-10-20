import React, { Component } from "react";
import { Row, Col, Tooltip, Button } from "reactstrap";

const BASE_IMAGE_URL = "http://mappy.dali.dartmouth.edu/";

class MemberMapCard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    const { member } = this.props;
    return (
      <Button  id={member.name} onClick={() => console.log(member.name)}>
        <Row>
          <Col>
            <img
              className="h3 mw4"
              src={BASE_IMAGE_URL + member.iconUrl}
              alt="Logo"
            />
          </Col>
          <Col>{member.name}</Col>
        </Row>
        <Tooltip
          placement="right"
          isOpen={this.state.tooltipOpen}
          target={member.name}
          toggle={this.toggle}
        >
        {`"${member.message}"`}
        </Tooltip>
      </Button>
    );
  }
}

export default MemberMapCard;
