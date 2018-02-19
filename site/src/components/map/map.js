import React from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



export class MapContainer extends React.Component {
    render() {
        return (
          <Map google={this.props.google} zoom={15}
          initialCenter={{
            lat: 13.649737, 
            lng: 100.492537
          }}
          onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
          </Map>
        );
      }
    }
     
    export default GoogleApiWrapper({
      apiKey: "AIzaSyCqERKvN7hu3CR7eKuOeO2sKzmFj9FPNZ8"
    })(MapContainer)





