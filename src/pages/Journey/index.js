import React from 'react';

import Container from '../../components/Container';
import {Title} from './styles';

import List from '../../components/List';

export default function Journey() {
  const DATA = [
    {
      id: 1,
      name: 'First Item',
      description: 'description',
    },
    {
      id: 2,
      name: 'Second Item',
      description: 'description',
    },
    {
      id: 3,
      name: 'Third Item',
      description: 'description',
    },
  ];

  return (
    <Container>
      <Title>Jornada</Title>

      <List data={DATA} />
    </Container>
  );
}
