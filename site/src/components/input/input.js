import React from 'react'
import { Input, Menu, Dropdown, Icon } from 'semantic-ui-react'
import Hamburger from '../hamburger'

const InputField = () => (
    <div style={{ display: 'flex', padding: 10, zIndex: 100 }}>
        <Input fluid size='small ' icon='search' placeholder='Search' actionPosition='left'
        style={{ flex: 1 }} action={<Hamburger />} />
    </div>
)
export default InputField 