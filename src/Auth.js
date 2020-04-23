import React, { useState } from 'react';
import Input from './components/Input';

import styled from 'styled-components';

const AuthContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 100px;
  width: 500px;
  border: 5px solid black;

  > div{
    margin-bottom: 30px;
  }
`

const Button = styled.button`
border: none;
background-color: blue;
color: #ffffff;
padding: 10px;
outline: none;
cursor: pointer;
`


const Auth = () => {

  const [fullName, setFullName] = useState({
    value: '',
    hasError: false,
    errorMessage: ''
  })

  const [email, setEmail] = useState({
    value: '',
    hasError: false,
    errorMessage: ''
  })

  const [phone, setPhone] = useState({
    value: '',
    hasError: false,
    errorMessage: ''
  })

  const [password, setPassword] = useState({
    value: '',
    hasError: false,
    errorMessage: ''
  })

  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    hasError: false,
    errorMessage: ''
  })

  const [cardNumber, setCardNumber] = useState({
    value: '',
    hasError: false,
    errorMessage: ''
  })

  const [expiryDate, setExpiryDate] = useState({
    value: '',
    hasError: false,
    errorMessage: ''
  })

  const [pin, setPin] = useState({
    value: '',
    hasError: false,
    errorMessage: ''
  })

  const handleOnChange = e => {
    const { name, value } = e.target;


    if (name === 'fullName') {
      setFullName({ ...fullName, value })
    }

    if (name === 'email') {
      setEmail({ ...email, value })
    }

  }

  const handleValidateInput = e => {
    const { name, value } = e.target;

    if (name === 'fullName') {
      const wordCount = value.split(' ').filter(word => word !== '').length;

      if (value.length < 2) {
        setFullName({ ...fullName, hasError: true, errorMessage: 'Name must not be less than two characters' })
      } else if (wordCount < 2 && value.length >= 2) {
        setFullName({ ...fullName, hasError: true, errorMessage: 'Name must include a space and then a second name' })
      } else {
        setFullName({ ...fullName, hasError: false, errorMessage: '' })
      }
    }

    if (name === 'email') {
      const patt = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      var isValid = patt.test(value);
      if (!isValid) {
        setEmail({ ...email, hasError: true, errorMessage: 'Please enter a valid email' })
      } else {
        setEmail({ ...email, hasError: false, errorMessage: '' })
      }

    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log('hahaha')
  }

  return (
    <AuthContainer onSubmit={handleOnSubmit}>
      <Input type='text' name='fullName' placeholder='Full Name' value={fullName.value} hasError={fullName.hasError} errorMessage={fullName.errorMessage} handleOnChange={handleOnChange} handleOnBlur={handleValidateInput} />
      <Input type='email' name='email' placeholder='Email' value={email.value} hasError={email.hasError} errorMessage={email.errorMessage} handleOnChange={handleOnChange} handleOnBlur={handleValidateInput} />
      <Input type='tel' name='phone' placeholder='phoneNumber' value={phone.value} hasError={phone.hasError} errorMessage={phone.errorMessage} handleOnChange={handleOnChange} handleOnBlur={handleValidateInput} />
      <Input type='password' name='password' placeholder='***' value={password.value} hasError={password.hasError} errorMessage={password.errorMessage} handleOnChange={handleOnChange} handleOnBlur={handleValidateInput} />
      <Input type='password' name='confirmPassword' placeholder='***' value={confirmPassword.value} hasError={confirmPassword.hasError} errorMessage={confirmPassword.errorMessage} handleOnChange={handleOnChange} handleOnBlur={handleValidateInput} />
      <Input type='text' name='cardNumber' placeholder='cardNumber' value={cardNumber.value} hasError={cardNumber.hasError} errorMessage={cardNumber.errorMessage} handleOnChange={handleOnChange} handleOnBlur={handleValidateInput} />
      <Input type='text' name='expiryDate' placeholder='mm/yy' value={expiryDate.value} hasError={expiryDate.hasError} errorMessage={expiryDate.errorMessage} handleOnChange={handleOnChange} handleOnBlur={handleValidateInput} />
      <Input type='password' name='pin' placeholder='****' value={pin.value} hasError={pin.hasError} errorMessage={pin.errorMessage} handleOnChange={handleOnChange} handleOnBlur={handleValidateInput} />
      <Button>Submit</Button>
    </AuthContainer>
  )
}

export default Auth;
