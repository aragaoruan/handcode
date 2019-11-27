import styled from 'styled-components/native';
import {fonts} from '../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const Description = styled.Text`
  padding: 10px;
  font-size: ${fonts.regular};
`;

export const Border = styled.View`
  border: solid 1px black;
  margin: 10px;
`;

export const Button = styled.TouchableOpacity`
  background: #6bd4c1;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
  height: 30px;
`;

export const NameButton = styled.Text``;

export const Glosario = styled.View`
  flex-direction: column;
  padding: 10px;
`;

export const NameGlosario = styled.Text``;

export const TitleNameGlosario = styled.Text`
  font-weight: bold;
`;
export const TitleGlosario = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const ButtonGlosario = styled.TouchableOpacity`
  background: #6bd4c1;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 14px;
  height: 30px;
  width: 100px;
`;
export const ContainerGlosario = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
