import React, { Component } from "react";
import { connect } from "react-redux";
import { Col } from "reactstrap";
import MemberCard from "../components/sidebar/MemberCard";
class Sidebar extends Component {
  render() {
    return (
      <Col style={styles.scrollbar}>
        {this.props.members.members.map((member, i) => {
          return <MemberCard key={i} id={i} member={member} />;
        })}
      </Col>
    );
  }
}

const mapStateToProps = ({ members }) => ({ members });

export default connect(
  mapStateToProps,
  null
)(Sidebar);

const styles = {
  scrollbar: {
    maxHeight: "100vh",
    overflow: "hidden",
    overflowY: "auto"
  }
};
