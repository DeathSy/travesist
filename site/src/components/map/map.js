/* eslint-disable no-undef */
import React from 'react'

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} from 'react-google-maps'
import { geolocated } from 'react-geolocated'
import { SearchBox } from 'react-google-maps/lib/components/places/SearchBox'
import { withProps, compose, lifecycle } from 'recompose'

import InputField from '../input'
import HereButton from '../here'
import SuggestionCard from '../suggestionCard'
import ErrorCard from '../errorCard'

export class MapContainer extends React.Component {
  render () {
    const {
      onMapMounted,
      onSearchBoxMounted,
      bounds,
      onPlacesChanged,
      center,
      onLocationChange,
      directions,
      error,
      text
    } = this.props
    return (
      <GoogleMap
        ref={onMapMounted}
        defaultZoom={15}
        center={center}
        defaultOptions={{
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          rotateControl: false,
          fullscreenControl: false
        }}
      >
        <SearchBox
          ref={onSearchBoxMounted}
          bounds={bounds}
          controlPosition={google.maps.ControlPosition.TOP_LEFT}
          onPlacesChanged={onPlacesChanged}
        >
          <InputField onChange={this.props.onChange} />
        </SearchBox>
        <Marker position={center} />
        {directions && <DirectionsRenderer directions={directions} />}
        {directions && <SuggestionCard directions={directions} />}
        {error && <ErrorCard text={text} />}
        <HereButton changeLocation={onLocationChange} />
      </GoogleMap>
    )
  }
}

export default compose(
  geolocated({
    positionOptions: {
      enableHighAccuracy: false
    }
  }),
  withProps(props => ({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `670px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  })),
  lifecycle({
    componentWillMount () {
      const refs = {}

      this.setState({
        bounds: null,
        center: {
          lat: 13.7051282,
          lng: 100.5026809
        },
        onMapMounted: ref => {
          refs.map = ref
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces()
          const bounds = new google.maps.LatLngBounds()

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          })

          if (!places.length) {
            this.setState({
              error: true,
              text: 'ไม่สามารถค้นหาเส้นทางได้'
            })
          } else {
            const DirectionsService = new google.maps.DirectionsService()
            DirectionsService.route(
              {
                origin: new google.maps.LatLng(
                  this.props.coords.latitude,
                  this.props.coords.longitude
                ),
                destination: places[0].geometry.location,
                travelMode: google.maps.TravelMode.TRANSIT
              },
              (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                  this.setState({
                    directions: result,
                    error: undefined
                  })
                } else {
                  this.setState({
                    error: true,
                    text: 'ไม่สามารถสร้างเส้นทางได้'
                  })
                }
              }
            )
          }
        },
        onLocationChange: () => {
          const {
            isGeolocationAvailable,
            isGeolocationEnabled,
            coords
          } = this.props
          if (isGeolocationAvailable && isGeolocationEnabled) {
            this.setState({
              center: new google.maps.LatLng(coords.latitude, coords.longitude)
            })
          }
        }
      })
    }
  }),
  withGoogleMap
)(MapContainer)
