import React from 'react'
import {Input} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const InputField = () => (
    <div style={{ display: 'flex', width: '100%', padding: 10, zIndex: 100 }}>
        <Input icon='search' placeholder='Search' style={{ flex: 1 }} />
    </div>
)
export default InputField 