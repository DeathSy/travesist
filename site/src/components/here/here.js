import React from 'react';
import { geolocated } from 'react-geolocated';
import Map from '../map'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MyLocation from 'material-ui/svg-icons/maps/my-location';



class Geolocation extends React.Component {

  state = {
    "latitude": 13.7051282,
    "longitude": 100.5026809,
  }


  onButtonClicked = () => {
    console.log('The link was clicked.');
    this.setState({
      "latitude": this.props.coords.latitude,
      "longitude": this.props.coords.longitude,
    })


  }
  render() {

    const MyLocationButton = () => (
      <FloatingActionButton style={style} onClick={this.onButtonClicked}>
        <MyLocation />
      </FloatingActionButton>
    );

    const style = {
      margin: 0,
      top: 'auto',
      right: 30,
      bottom: 55,
      left: 'auto',
      position: 'fixed',
      backgroundColor: 'orange',
    };
    return (
      <div>
        {
          !this.props.isGeolocationAvailable
            ? <div>Your browser does not support Geolocation</div>
            : !this.props.isGeolocationEnabled
              ? <div>Geolocation is not enabled</div>
              : this.props.coords
                ? <div>{this.state.latitude}  {this.state.longitude}
                  <Map latitude={this.state.latitude} longitude={this.state.longitude} />
                </div>
                : <div>Getting the location data&hellip; </div>
        }

        <MuiThemeProvider>
          < MyLocationButton />
        </MuiThemeProvider>
      </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  }
})(Geolocation);