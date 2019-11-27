import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundcolor};
  justify-content: center;
`;

export const LoginContainer = styled.View`
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const PasswordContainer = styled.View`
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const UserInput = styled.TextInput.attrs({
  placeholderTextColor: colors.primary.grayTextColor,
})`
  font-size: 22px;
  color: ${colors.primary.grayTextColor};
`;

export const PasswordInput = styled.TextInput.attrs({
  placeholderTextColor: colors.primary.grayTextColor,
})`
  font-size: 22px;
  color: ${colors.primary.grayTextColor};
`;
