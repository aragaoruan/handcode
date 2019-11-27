import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../styles';

export const Container = styled.View`
  margin-top: 20px;
  width: 100%;
`;

export const Field = styled.View`
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`;

export const Label = styled.Text`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const TextInput = styled.TextInput`
  border: 1px solid #ccc;
`;

export const TextArea = styled.TextInput`
  border: 1px solid #ccc;
  width: 100%;
`;

export const Actions = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

export const ButtonContainer = styled.TouchableHighlight`
  padding: 10px 15px;
  border: 1px solid #ccc;
  background-color: #7159c1;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-size: ${fonts.big};
  color: #fff;
  font-weight: bold;
`;

export const ButtonPost = styled.Button`
  /* color: ${props => props.color}; */
  color: red;
`;

export const SubmitButton = styled(RectButton)`
  padding: 10px 16px;
  margin-top: 5px;
  border-radius: 4px;
  background: ${colors.secondary.lightColor};
  align-items: center;
  justify-content: center;
  width: 42%;
`;
