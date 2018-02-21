import React from 'react'
import { Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const style = {
  inputWrapper: {
    display: 'flex',
    width: '100%',
    height: 72,
    padding: 10,
    zIndex: 100,
    position: 'absolute',
    fontSize: 22
  }
}

const InputField = ({ onChange }) => (
  <div style={style.inputWrapper}>
    <Input
      icon='search'
      placeholder='Search'
      style={{ flex: 1 }}
      onChange={onChange}
    />
  </div>
)
export default InputField
