import styled from 'styled-components/native';

import {fonts} from '../../styles';

export const Container = styled.View``;

export const Title = styled.Text`
  font-size: ${fonts.bigger};
  font-weight: bold;
  padding: 0 20px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
