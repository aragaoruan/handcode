import React from 'react';
import Container from '../../components/Container';

const page = 'AULAS';
export function ClassListNavigationOptions() {
  return {
    headerTitle: page,
  };
}

import List from '../../components/List';

export default function ClassList() {
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

  return <Container>{<List data={DATA} />}</Container>;
}
