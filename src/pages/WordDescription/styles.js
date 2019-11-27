import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageDescription = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Word = styled.Text`
  margin-top: 10px;
  font-size: 26px;
  color: black;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: gray;
  margin: 15px;
`;
