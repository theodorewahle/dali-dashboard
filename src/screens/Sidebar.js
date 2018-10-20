import React, { Component } from 'react'
import {connect } from 'react-redux'

class Sidebar extends Component {
  render() {
    return (
      <div style={styles.scrollbar}>
      {this.props.members.members.map((member, i) => {
        return (
          <h1 key={i}>{member.name}</h1>
        )
      })}
      </div>
    )
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
    overflowY: "auto",
  }
}
