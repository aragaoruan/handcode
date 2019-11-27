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
  margin: 5px 0 10px 0;
`;

export const AvatarArea = styled.View`
  justify-content: center;
  align-items: center;
`;

export const DataInfo = styled.View`
  width: 100%;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
  border-bottom-color: #ccc;
  border-bottom-width: 2px;
  padding-bottom: 10px;
`;

export const Label = styled.Text`
  font-size: ${fonts.regular};
  font-weight: bold;
  width: 150px;
  line-height: 30px;
`;

export const Value = styled.Text`
  font-size: ${fonts.regular};
  width: 150px;
  line-height: 30px;
`;
