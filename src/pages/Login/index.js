import React from 'react';
import {TextInput} from 'react-native';

import {
  Container,
  LoginContainer,
  UserInput,
  PasswordContainer,
  PasswordInput,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

export function LoginNavigationOptions() {
  return {
    headerTitle: 'Login',
  };
}

export function Login() {
  return (
    <Container>
      <LoginContainer>
        <Icon name="user" size={20} color="#000" />
        <UserInput placeholder="Digite o seu usuário" />
      </LoginContainer>
      <PasswordContainer>
        <Icon name="lock" size={20} color="#000" />
        <PasswordInput placeholder="Digite a sua senha" />
      </PasswordContainer>
    </Container>
  );
}
