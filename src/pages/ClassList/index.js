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
      description: 'Algoritmo Recepcionista de Cinema',
    },
  ];

  return (
    <Container>
      {<List namepage="Class" navigation={navigation} data={DATA} />}
    </Container>
  );
}
