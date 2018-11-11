import React from 'react';
import './styles.css';
import { strengthIndicator, stengthColor } from './strength';

const PasswordInput = ({value, placeholder, handleChange, style}) => {
  const strength = strengthIndicator(value)
  const color = stengthColor(strength)
  return (
    <input
       type='password'
       value={value}
       onChange={handleChange}
       className='__password-input'
       placeholder={placeholder}
       style = {{
         border: `3px solid ${color}`
       }}
    />
  )
}



export default PasswordInput;