import React from 'react'
import { Segment } from 'semantic-ui-react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 350,
  transform: 'translate(-50%, -50%)',
  textAlign: 'center'
}

export default ({ text }) => (
  <Segment style={style}>
    <span style={{ color: 'red' }}>{text}</span>
  </Segment>
)
