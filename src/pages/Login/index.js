import React from 'react';
import {TextInput} from 'react-native';

import {
  Container,
  LoginContainer,
  UserInput,
  PasswordContainer,
  PasswordInput,
  AuthenticatorContainer,
  LoginDescription,
  LoginButton,
  ButtonText,
  ButtonContainer,
  UnderlinedText,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

export function LoginNavigationOptions() {
  return {
    headerTitle: 'Login',
  };
}

export function Login({navigation}) {
  return (
    <Container>
      <AuthenticatorContainer>
        <LoginContainer>
          <Icon name="user" size={18} color="#000" />
          <UserInput placeholder="Digite o seu usuário" />
        </LoginContainer>
        <PasswordContainer>
          <Icon name="lock" size={18} color="#000" />
          <PasswordInput placeholder="Digite a sua senha" />
        </PasswordContainer>
        <LoginDescription>
          Ao entrar você concorda com os nossos{' '}
          <UnderlinedText>
            Termos de Serviço e Política de Privacidade
          </UnderlinedText>
        </LoginDescription>
        <ButtonContainer>
          <LoginButton
            onPress={() => {
              navigation.navigate('Main');
            }}>
            <ButtonText>Entrar</ButtonText>
          </LoginButton>
        </ButtonContainer>
      </AuthenticatorContainer>
    </Container>
  );
}
