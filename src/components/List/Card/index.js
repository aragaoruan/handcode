import React from 'react';

import {Container, Name, Description} from './styles';

export default function Card({data, next}) {
  return (
    <Container onPress={next}>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>
    </Container>
  );
}
