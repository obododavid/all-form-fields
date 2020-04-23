import React, { useState } from 'react';
import { InputField, InputContainer } from './style';

const Input = ({ type, name, placeholder }) => {
    const [focus, setFocus] = useState()
    return (
        <InputContainer>
            <InputField type={type} name={name} placeholder={placeholder} />
            <label className='input-label'>{placeholder}</label>
        </InputContainer>
    )
}

export default Input