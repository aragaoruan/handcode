import React from 'react';
import Container from '../../components/Container';

const page = 'AULAS';
export function ClassListNavigationOptions() {
  return {
    headerTitle: page,
  };
}

import List from '../../components/List';

export default function ClassList({navigation}) {
  const DATA = [
    {
      id: 1,
      name: 'Aula 1',
      description: '...',
    },
    {
      id: 2,
      name: 'Aula 2',
      description: '...',
    },
    {
      id: 3,
      name: 'Aula 3',
      description: '...',
    },
    {
      id: 4,
      name: 'Aula 4',
      description: '...',
    },
    {
      id: 5,
      name: 'Aula 5',
      description: '...',
    },
  ];

  return (
    <Container>
      {<List namepage="Class" navigation={navigation} data={DATA} />}
    </Container>
  );
}
