import React from 'react';
import {Container, Title} from './styles';

import Post from './Post';
import Item from './Item';

export default function Community() {
  return (
    <Container>
      <Title>Comunidade</Title>
      <Post />

      <Item />
      <Item />
    </Container>
  );
}
