import styled from 'styled-components/native';
import {colors} from '../../../styles';

export const Container = styled.TouchableOpacity`
  padding: 20px;
  border-radius: 4px;
  background: #edf3f7;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`;
