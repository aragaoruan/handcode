import styled from 'styled-components/native';
import {colors, fonts} from '../../../styles';

export const Container = styled.View`
  width: 100%;
  background: #eee;
  padding: 16px;
  border-radius: 4px;
  margin-top: 20px;
`;

export const Top = styled.View`
  flex-direction: row;
`;

export const Name = styled.Text`
  font-size: ${fonts.big};
  margin-left: 8px;
  margin-right: 8px;
  color: ${colors.primary.darkColor};
`;

export const Content = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-top: 8px;
  padding: 8px;
  width: 100%;
`;

export const Comments = styled.View`
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

export const Comment = styled.View`
  flex-direction: column;
  width: 100%;
  background: #fff;
  padding: 5px;
  border-radius: 4px;
  align-items: flex-start;
`;

export const CommentInfo = styled.View`
  flex-direction: row;
`;
