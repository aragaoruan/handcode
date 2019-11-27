import React from 'react';

import Container from '../../components/Container';
import {Title} from './styles';

import List from '../../components/List';

export default function Journey({navigation}) {
  const DATA = [
    {
      id: 1,
      name: 'Algoritmo',
      description:
        'Embora as vezes não percebemos, utilizamos algoritmos no nosso dia-a-dia e não sabemos. Para a execução de alguma tarefa ou mesmo resolver algum problema, muitas vezes inconscientemente executamos algoritmos.',
    },
  ];

  return (
    <Container>
      <Title>Jornada</Title>

      <List namepage="ClassList" navigation={navigation} data={DATA} />
    </Container>
  );
}
