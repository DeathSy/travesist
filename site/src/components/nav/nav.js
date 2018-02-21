import React from 'react'
import { Input, Segment, Button, Icon, Menu } from 'semantic-ui-react'
import Hamburger from '../hamburger'

const NavbarInput = () => (
    <Segment inverted color='orange' style={{ borderRadius: '0px' }}>
       
       
            <div style={{ padding: 5 }}>
                <Input fluid  icon='search' placeholder='Source' style={{ flex: 1 }} />
                <Input fluid icon='search' placeholder='Destination' style={{ flex: 1, marginTop: 5 }} />
            </div>
       


    </Segment>
)
export default NavbarInput 