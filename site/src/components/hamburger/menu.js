import React from 'react'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'


const MenuBar = () => (
    
    <div style={{display: 'flex', background:'#f2711c', zIndex: 100, borderTopLeftRadius: '4.5px', 
    borderBottomLeftRadius: '4.5px'}}>
        <Menu color='orange' inverted>
            <Dropdown item icon='content' simple>
                <Dropdown.Menu>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>History</Dropdown.Item>
                    <Dropdown.Item>Favorite</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu>
    </div>
)

export default MenuBar
