import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Name,
  Top,
  Content,
  Comments,
  Comment,
  CommentInfo,
} from './styles';

export default function Item() {
  return (
    <Container>
      <Top>
        <Icon name="user-circle-o" size={20} />
        <Name>Gustavo Luigi</Name>
      </Top>
      <Content>
        <Text>Não entendi o significado de "input"</Text>
      </Content>
      <Comments>
        <Comment>
          <CommentInfo>
            <Icon name="user-circle-o" size={20} />
            <Name>Gabriel Freitas</Name>
          </CommentInfo>
          <Text> Serve para isso e para isso e para aquilo </Text>
        </Comment>
      </Comments>
    </Container>
  );
}
