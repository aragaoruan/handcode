import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const AuthenticatorContainer = styled.View`
  justify-content: flex-start;
  width: 80%;
  margin-left: 10px;
  margin-right: 10px;
`;

export const LoginContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
`;

export const LoginDescription = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.primary.blackTextColor};
  margin-top: 10px;
  justify-content: center;
  text-align: center;
`;

export const PasswordContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const UserInput = styled.TextInput.attrs({
  placeholderTextColor: colors.primary.grayTextColor,
})`
  font-size: 22px;
  color: ${colors.primary.grayTextColor};
  margin-left: 10px;
`;

export const PasswordInput = styled.TextInput.attrs({
  placeholderTextColor: colors.primary.grayTextColor,
})`
  font-size: 22px;
  color: ${colors.primary.grayTextColor};
  margin-left: 10px;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  margin-top: 60px;
  align-items: center;
`;

export const LoginButton = styled.TouchableHighlight`
  background-color: ${colors.primary.darkColor};
  width: 30%;
  border-radius: 5px;
`;

export const UnderlinedText = styled.Text`
  text-decoration: underline;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  padding: 14px;
  color: white;
  text-align: center;
`;
