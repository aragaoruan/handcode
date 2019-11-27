import React, {useState} from 'react';
import {FlatList, Text} from 'react-native';
//import {Container} from '../../components/Container';

import {
  Container,
  Search,
  Word,
  CheckSignal,
  CheckSignalText,
  ItemContainer,
} from './styles';

export function GlossaryNavigationOptions() {
  return {
    headerTitle: 'Glossário',
  };
}

export function Glossary({navigation}) {
  const [data, updateData] = useState([
    {
      id: '1',
      word: 'Palavra 1',
      description: 'Esta é uma breve descrição da palavra',
    },
    {
      id: 2,
      word: 'Palavra 2',
      description: 'Esta é uma breve descrição da palavra',
    },
    {
      id: 3,
      word: 'Palavra 3',
      description: 'Esta é uma breve descrição da palavra',
    },
    {
      id: 4,
      word: 'Palavra 5',
      description: 'Esta é uma breve descrição da palavra',
    },
    {
      id: 5,
      word: 'Palavra 6',
      description: 'Esta é uma breve descrição da palavra',
    },
  ]);

  return (
    <Container>
      <Search placeholder="Digite algo" />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ItemContainer>
            <Word>{item.word}</Word>
            <CheckSignal onPress={() => navigation.navigate('WordDescription')}>
              <CheckSignalText>Ver sinal</CheckSignalText>
            </CheckSignal>
          </ItemContainer>
        )}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  );
}
