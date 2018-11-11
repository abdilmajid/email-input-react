import React from 'react';
import './styles.css';
 
const EmailInput = ({value, placeholder, handleChange, style }) => {
   return (
     <input
        type='text'
        value={value}
        onChange={handleChange}
        className='__email-input'
        placeholder={placeholder}
        style={style}
     />
   )
 }
 

export default EmailInput;