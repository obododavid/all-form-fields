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

    if (name === 'phone') {
      const _value = value.match(/\d/g) || [];
      const joinNumbers = _value.join("")
      if (value.length <= 11) {
        setPhone({ ...phone, value: joinNumbers })
      }
    }

    if (name === 'password') {
      setPassword({ ...password, value })
    }


    if (name === 'cardNumber') {
      const _value = value.match(/(\d{1,4})/g) || [];
      const formattedValue = _value.join(" ");
      if (value.length <= 19) {
        setCardNumber({ ...cardNumber, value: formattedValue });
      }
    }

    if (name === 'expiryDate') {
      const _value = value.match(/(\d{1,2})/g) || [];
      const formattedValue = _value.join("/");
      if (value.length <= 5) {
        setExpiryDate({ ...expiryDate, value: formattedValue });
      }
    }

    if (name === 'pin') {
      const _value = value.match(/\d/g) || [];
      const formattedValue = _value.join("");
      if (value.length <= 4) {
        setPin({ ...pin, value: formattedValue });
      }
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
      const pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
      var isValid = pattern.test(value);
      if (!isValid) {
        setEmail({ ...email, hasError: true, errorMessage: 'Please enter a valid email' })
      } else {
        setEmail({ ...email, hasError: false, errorMessage: '' })
      }
    }

    if (name === 'phone') {
      if (value.length !== 11) {
        setPhone({ ...phone, hasError: true, errorMessage: 'Phone number must be 11 characters' })
      } else if (value[0] !== '0') {
        setPhone({ ...phone, hasError: true, errorMessage: 'Nigerian Phone number must begin with a zero' })
      } else {
        setPhone({ ...phone, hasError: false, errorMessage: '' })
      }
    }

    if (name === 'password') {
      const pattern = new RegExp(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/);
      var isValid = pattern.test(value);
      if (!isValid || value.length < 6) {
        setPassword({ ...password, hasError: true, errorMessage: 'Password must contain at least one uppercase character, one number, special character and not shorter than six characters' })
      } else {
        setPassword({ ...password, hasError: false, errorMessage: '' })
      }
    }

    if (name === 'cardNumber') {
      if (value.length !== 19) {
        setCardNumber({ ...cardNumber, hasError: true, errorMessage: "Card Number must be 19 digits" });
      } else {
        setCardNumber({ ...cardNumber, hasError: false, errorMessage: "" });
      }
    }

    if (name === 'expiryDate') {
      const day = value.slice(0, 2);

      if (value.length !== 5) {
        setExpiryDate({ ...expiryDate, hasError: true, errorMessage: "enter complete date" });
      } else if (day < 1 || day > 31) {
        setExpiryDate({ ...expiryDate, hasError: true, errorMessage: "enter a valid day" });
      } else {
        setExpiryDate({ ...expiryDate, hasError: false, errorMessage: "" });
      }
    }

    if (name === 'pin') {
      if (value.length !== 4) {
        setPin({ ...pin, hasError: true, errorMessage: "card pin must be 4 digits" });
      } else {
        setPin({ ...pin, hasError: false, errorMessage: "" });
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
      <Input type='text' name='cardNumber' placeholder='XXXX XXXX XXXX XXXX' value={cardNumber.value} hasError={cardNumber.hasError} errorMessage={cardNumber.errorMessage} handleOnChange={handleOnChange} handleOnBlur={handleValidateInput} />
      <Input type='text' name='expiryDate' placeholder='mm/yy' value={expiryDate.value} hasError={expiryDate.hasError} errorMessage={expiryDate.errorMessage} handleOnChange={handleOnChange} handleOnBlur={handleValidateInput} />
      <Input type='password' name='pin' placeholder='****' value={pin.value} hasError={pin.hasError} errorMessage={pin.errorMessage} handleOnChange={handleOnChange} handleOnBlur={handleValidateInput} />
      <Button>Submit</Button>
    </AuthContainer>
  )
}

export default Auth;
