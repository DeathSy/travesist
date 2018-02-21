import React from 'react'
import { Segment, Icon, Grid } from 'semantic-ui-react'

const style = {
  position: 'absolute',
  bottom: 40,
  left: '50%',
  width: 350,
  transform: 'translate(-50%, 0)'
}

export default ({ directions }) => {
  return (
    <Segment raised style={style}>
      <Grid>
        {directions.routes[0].legs[0].steps.map((step, index) => {
          if (index < 3) {
            const result = []
            switch (step.travel_mode) {
              case 'WALKING':
                result.push(
                  <Grid.Column width={3} key={index} verticalAlign='middle'>
                    <Icon name='male' size='large' />
                  </Grid.Column>
                )
                break
              case 'TRANSIT':
                result.push(
                  <Grid.Column width={4} key={index} verticalAlign='middle'>
                    <Icon name='bus' size='large' />
                    {step.transit.line.short_name}
                  </Grid.Column>
                )
            }
            if (
              index !== 2 &&
              index !== directions.routes[0].legs[0].steps.length - 1
            ) {
              result.push(
                <Grid.Column
                  width={1}
                  style={{ paddingLeft: 0, paddingRight: 0 }}
                  verticalAlign='middle'
                >
                  <Icon name='chevron right' />
                </Grid.Column>
              )
            }
            return result
          }
        })}
        <Grid.Column width={4} style={{ paddingLeft: 0 }}>
          <div style={{ fontSize: 9 }}>
            {directions.routes[0].legs[0].distance.text}
          </div>
          <div style={{ fontSize: 9 }}>
            {directions.routes[0].legs[0].duration.text}
          </div>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}
