import styled from 'styled-components/native';
import {colors, fonts} from '../../styles';

export const Container = styled.View`
  padding: 30px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${fonts.bigger};
  font-weight: bold;
  color: ${colors.primary.color};
`;
