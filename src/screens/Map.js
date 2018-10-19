import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";
import { googleMapsAPI } from "../config.js";
import MemberMapCard from "../components/Map/MemberMapCard";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 20,
      lng: -65
    },
    zoom: 3
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsAPI }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.members.members.map((member, i) => {
            return (
              <div lat={member.lat_long[0]} lng={member.lat_long[1]} key={i}>
                <MemberMapCard member={member} />
              </div>
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = ({ members }) => ({ members });

export default connect(
  mapStateToProps,
  null
)(Map);

/*

*/
