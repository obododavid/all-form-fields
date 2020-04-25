import React, { useState } from 'react';
import { InputContainer } from './style';

const Input = ({ type, name, placeholder, value, handleOnChange, handleOnBlur, hasError, errorMessage, title }) => {
    const [focus, setFocus] = useState('')
    return (
        <InputContainer focus={focus}>
            <input
                className={hasError ? 'input-field error' : 'input-field'}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleOnChange}
                onBlur={handleOnBlur}
                onFocus={() => setFocus(true)} />
            <label className='input-label'>{title}</label>
            {hasError && <h6 className='error-message'><span>!</span>{errorMessage}</h6>}
        </InputContainer>
    )
}

export default Input