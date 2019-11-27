import React from 'react';
import {Image} from 'react-native';

import {Container} from './styles';

const page = '';
export function ImagePageNavigationOptions() {
  return {
    headerTitle: page,
  };
}

export default function ImagePage() {
  return (
    <Container>
      <Image
        style={{width: 300, height: 300}}
        source={{
          uri:
            'https://www.portalacesse.com/wp-content/uploads/2017/10/emoji-libras-apple1017.jpg',
        }}
      />
    </Container>
  );
}
