import React from 'react';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


export default class MapContainer extends React.Component {
  
    render() {
      const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: this.props.latitude, lng: this.props.longitude }}
        >
          <Marker
            position={{ lat: this.props.latitude, lng: this.props.longitude }}
          />
        </GoogleMap>
      ));
      
      
        return (
        <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDmGxDWP0R4a5mlRQ4NCvKbysZaatGmx7U&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `650px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
        );
        
      }
    }






