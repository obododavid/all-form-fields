import React, { useState } from 'react';
import { InputContainer } from './style';

const Input = ({ type, name, placeholder, value, handleOnChange, handleOnBlur, hasError, errorMessage }) => {
    const [focus, setFocus] = useState()
    return (
        <InputContainer>
            <input className={hasError ? 'input-field error' : 'input-field'} type={type} name={name} placeholder={placeholder} value={value} onChange={handleOnChange} onBlur={handleOnBlur} />
            <label className='input-label'>{placeholder}</label>
            {hasError && <h6 className='error-message'>{errorMessage}</h6>}
        </InputContainer>
    )
}

export default Input