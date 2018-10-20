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
    console.log(this.props.member)
    console.log()
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
            <Row>
             {this.props.member.project[0] && (  <p className="pb0 mb0 mt2 white">Project: <strong>{this.props.member.project[0]}</strong></p>)}
              </Row>
              <Row>
              <p className="white mt2">Terms On: <strong>{this.props.member.terms_on.join(", ")}</strong></p>
              </Row>
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
