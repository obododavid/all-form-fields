import React from 'react';
import Input from './components/Input';

import styled from 'styled-components';

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  align-items: center;
  border: 5px solid black;
`


const Auth = () => {
  return (
    <AuthContainer>
      <Input type='text' name='firstName' placeholder='First Name' />
      <Input type='text' name='lastName' placeholder='Last Name' />
      <Input type='email' name='email' placeholder='Email' />
      <Input type='password' name='password' placeholder='***' />
    </AuthContainer>
  )
}

export default Auth;
