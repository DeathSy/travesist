import React from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'

const Menu = () => (
    <div>
        <Menu attached='top'>
            <Dropdown item icon='content' simple>
                <Dropdown.Menu>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Favorite</Dropdown.Item>
                    <Dropdown.Item>History</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>     
        </Menu>

    </div>
)

export default Menu
