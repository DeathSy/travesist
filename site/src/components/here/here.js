/* eslint-disable no-undef */
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MyLocation from 'material-ui/svg-icons/maps/my-location'

const style = {
  margin: 0,
  top: 'auto',
  right: 15,
  bottom: 130,
  left: 'auto',
  position: 'fixed',
  backgroundColor: 'orange'
}

export default ({ changeLocation }) => (
  <MuiThemeProvider>
    <FloatingActionButton style={style} onClick={changeLocation}>
      <MyLocation />
    </FloatingActionButton>
  </MuiThemeProvider>
)
