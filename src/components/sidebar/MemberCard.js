import React, { Component} from 'react'
import { Row, Col } from 'reactstrap'
export default class MemberCard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleHover = this.toggleHover.bind(this);

    this.state = {
      cardOpen: false,
      cardHovered: false
    };
  }

  toggle() {
    this.setState({
      cardOpen: !this.state.cardOpen
    });
  }

  toggleHover() {
    this.setState({
      cardHovered: !this.state.cardHovered
    });
  }


  render() {
    const hoveredBlue =this.state.cardHovered ? "#0169D9" : "#007BFF"
    const hoveredGray = this.state.cardHovered ? "#5A6268" : "#6C757D"

    return (
      <Row
        style={{ backgroundColor: this.props.id%2===0 ? hoveredBlue : hoveredGray }}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}

        >
        <Col>
        <Row onClick={this.toggle} style={styles.shadowRow}>
        <Col>
          <h1 className="white">{this.props.member.name}</h1>
          </Col>
        </Row>
          {this.state.cardOpen &&
            (<Row
              className="br3 mh1 mv1"
              >
            <Col>
              <h5 className="white">{this.props.member.message}</h5>
              </Col>
          </Row>)}
        </Col>
      </Row>
    )
  }
}

const styles = {
  shadowRow : { "boxShadow": " 2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )"}
}
