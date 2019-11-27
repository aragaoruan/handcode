import React from 'react';
import {Image} from 'react-native';

import {Container} from './styles';

export default function Welcome() {
  return (
    <Container>
      <Image
        style={{width: 300, height: 300}}
        source={{
          uri:
            'https://static.wixstatic.com/media/3e2a7a_93095429e0634712b5a42f49af46b508~mv2.gif',
        }}
      />
    </Container>
  );
}
